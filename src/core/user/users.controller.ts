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
    read(): string {
        return 'Yo m!';
    }

    @Get(':id')
    async readOne(@Param() params, @Request() req) {
        let user = await this.usersService.findOne(params.id);

        return [];
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
