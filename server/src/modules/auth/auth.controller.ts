import { AuthService } from './auth.service';
import { Body, Controller, Delete, Get, Post, Put, Request } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { LoginDto, SignupDto } from 'src/core/dto/auth.dto';
import { Public } from 'src/core/guard/auth.metadata';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Public()
    @Post('/login')
    login(@Body() authModel: LoginDto) {
        return this.authService.login(authModel);
    }

    @Public()
    @Post('/signup')
    signup(@Body() authModel: SignupDto) {
        return this.authService.signUp(authModel);
    }

    @Put('/update')
    updateUser(@Body() updateModel: Prisma.UserCreateInput, @Request() req){
        return this.authService.updateUser(updateModel, req);
    }

    @Get('/curretn_user')
    getCurrentUser(@Request() req){
        return this.authService.getCurrentUser(req);
    }

    @Get('all')
    async getAll(){
        return this.authService.getAll();
    }

    @Delete('all')
    async deleteAll(){
        return this.authService.deleteAll();
    }
}
