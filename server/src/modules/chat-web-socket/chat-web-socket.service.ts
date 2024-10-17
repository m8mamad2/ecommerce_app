import { Server } from 'socket.io';
import { DatabaseService } from './../../core/database/database.service';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { jwsConstans } from 'src/core/constans';
import { Prisma } from '@prisma/client';
import { WsException } from '@nestjs/websockets';
import { ChatGetMessageDto } from './dto/chat-get-message-dto';

@Injectable()
export class ChatWebSocketService {
    constructor(private jwtService:JwtService, private databaseService: DatabaseService) { }


    async onConnected(socket: Socket){
        const token = socket.handshake.headers.authorization;
        if (!token)
            throw new WsException('Not TOken');

        try {
            const payload = await this.jwtService.verifyAsync( token, { secret: jwsConstans.secret } )
            return payload
        }
        catch (e){ 
            console.log('error ' + e);
        }
    }

    async sendMessage(data: Prisma.MessageCreateInput, socket: Socket,wss: Server){
        try{
            // const receiver = this.getCurretnUser(wss, data.receiver);
            await this.databaseService.message.create({ data: data })
            socket.to(data.receiver).emit('receive_message', data);
            // socket.to(data.sender).emit('receive_message', data);
        }
        catch(e){
            console.log(e);
        }
    }
    
    async getMessage(dataDto: ChatGetMessageDto, socket: Socket){
        try{
            const data = await this.databaseService.message.findMany({ 
                where:  {
                    OR:[
                        // { sender: '2', receiver:  '1'},
                        // { sender: '1', receiver:  '2'},
                        { sender: dataDto.sender, receiver:  dataDto.receiver},
                        { sender: dataDto.receiver, receiver:  dataDto.sender},
                    ]
                },
                orderBy: { createdAt:'asc' }
            } )
            socket.emit("get_message", data);
            return data;
        }
        catch(e){
            console.log(e);
        }
    }

    getCurretnUser(wss: Server, userId: string){
        const client = wss.sockets.adapter.rooms.get(userId);
        return client.values().next().value;
    }

    ok(wss: Server){
        const client = wss.sockets.adapter.rooms;
        return client.values().next().value;        
    }

}



// app.get('/messages', async (req, res) => {
//     const messages = await prisma.message.findMany({
//       orderBy: {
//         createdAt: 'asc',
//       },
//     });
//     res.json(messages);
//   });
