import { DatabaseService } from './../../core/database/database.service';
import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException, Request } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NotExistException } from 'src/core/exception';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
import { LoginDto, SignupDto } from 'src/core/dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private databaseService: DatabaseService) { }

  async login(authModel: LoginDto) {

    if (!authModel.phoneNumber || !authModel.password)
      throw new BadRequestException();

    const user = await this.databaseService.user.findUnique({
      where: { phoneNumber: authModel.phoneNumber },
    });

    if (!user) throw new NotExistException();

    const isCurrectPassword = await bcrypt.compare(authModel.password, user.password);

    if (isCurrectPassword) {
      const payload = { sub: user.id, phoneNumber: user.phoneNumber };
      const token = await this.jwtService.signAsync(payload);
      return { ...user, access_token: token, localId: user.id };
    }
    else throw new UnauthorizedException();

  }

  async signUp(authModel: SignupDto) {
    if (!authModel.password || !authModel.phoneNumber)
      throw new BadRequestException();

    try {
      const isAutheticated = await this.databaseService.user.findMany({ where:{ phoneNumber: authModel.phoneNumber } })
      
      if(isAutheticated.length !== 0)
        throw new HttpException('User Already Signed', HttpStatus.FORBIDDEN)
      
      const password = await bcrypt.hash(authModel.password, 10);
      const res = await this.databaseService.user.create({
        data: { phoneNumber: authModel.phoneNumber, password: password },
      });
      const payload = { sub: res.id, phoneNumber: res.phoneNumber };
      const token = await this.jwtService.signAsync(payload);
      return { ...res, password: undefined, access_token: token, localId: res.id };
    }
    catch (e) {
      console.log(e)
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }

  }

  async updateUser(updateModel: Prisma.UserCreateInput, @Request() req) {
    try {
      const user = req.user;
      await this.databaseService.user.update({
        where: { id: user.sub },
        data: updateModel
      });
      return { msg: "ok" };
    }
    catch (e) {
      console.log(e);
      throw new BadRequestException()
    }
  }

  async getCurrentUser(@Request() req) {
    try {
      const user = req.user;
      const token = await this.jwtService.signAsync(user);
      const data = await this.databaseService.user.findUnique({ where: { id: user.sub } });
      return { ...data, access_token: token };
    }
    catch (e) {
      throw new BadRequestException()
    }
  }

  async getAll() {
    return await this.databaseService.user.findMany();
  }

  async deleteAll() {
    return await this.databaseService.user.deleteMany();
  }


}



