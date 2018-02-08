import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {User} from "../interfaces/user";
import {UserSchema} from "../schemas/users";
import {Model} from "mongoose";

@Component()
export class UsersService {
    constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>) {}

    async create(data): Promise<User> {
        const user = new this.userModel(data);
        return await user.save();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findOne(id): Promise<User> {
        return await this.userModel.findById(id).exec();
    }
}