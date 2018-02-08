import { IsString, IsInt, MinLength, MaxLength } from 'class-validator';

export class CredentialsDto {

    @IsString()
    @MinLength(4)
    @MaxLength(100)
    readonly email: String;

    @IsString()
    @MinLength(4)
    @MaxLength(18)
    readonly password: String;
}