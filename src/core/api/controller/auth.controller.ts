import {Controller, Post, HttpStatus, HttpCode, Get, Body, HttpException} from '@nestjs/common';
import {AuthService} from "../../auth/services/auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('token')
    @HttpCode(HttpStatus.OK)
    public async createToken(@Body() data) {
        let token = await this.authService.createToken(data);

        if (token) {
            return token
        }
        else {
            throw new HttpException('bad credentials', HttpStatus.BAD_REQUEST);
        }
    }

    @Get('authorized')
    public async authorized() {
    }
}