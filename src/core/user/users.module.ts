import { Module } from '@nestjs/common';
import {UsersController} from "./users.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./schemas/users";
import {UsersService} from "./services/user.service";
import * as autoIncrement from "mongoose-auto-increment";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  components: [
      UsersController,
      UsersService
  ],
})
export class UsersModule {
    constructor() {
        UserSchema.plugin(autoIncrement.plugin, 'User');
    }
}