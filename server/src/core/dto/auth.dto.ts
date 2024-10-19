import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';
export class SignupDto {

    @IsNotEmpty()
    @IsPhoneNumber('IR')
    phoneNumber: string;

    @IsNotEmpty()
    password: string;

}

export class LoginDto {

    @IsNotEmpty()
    @IsPhoneNumber('IR')
    phoneNumber: string;

    @IsNotEmpty()
    password: string;

}


export class UpdateUserDto {
    key: string;
    value: string;
}