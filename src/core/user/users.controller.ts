import {
    Get, Controller, Put, Post, Param, Body, UsePipes, ValidationPipe, Request, Delete,
    Patch
} from '@nestjs/common';
import {UsersService} from "./services/user.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('/api/v1/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    async find() {
        return await this.usersService.find()
    }

    @Get(':id')
    async findOne(@Param() params, @Request() req) {
        return await this.usersService.findOne(params.id);
    }

    @Post()
    async create(@Body() data: CreateUserDto) {
        return await this.usersService.create(data);
    }

    @Patch(':id')
    update(): string {
        return 'Updated!'
    }

    @Delete('id')
    delete(): string {

        return 'Deleted!'
    }
}
