import { IsString, IsInt, MinLength, MaxLength, IsNotEmpty, Validate } from 'class-validator';
import {UniqueEmail} from "../../../common/constraints/email-exists";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @Validate(UniqueEmail)
    readonly email: String;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(100)
    readonly name: String;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(18)
    readonly phone: String;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(100)
    readonly verify_password: String;
}