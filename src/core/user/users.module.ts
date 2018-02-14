import {Module} from '@nestjs/common';
import {UsersController} from "./users.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./schemas/users";
import {UsersService} from "./services/user.service";
import * as autoIncrement from "mongoose-auto-increment";
import {CryptoService} from "../auth/services/crypto.service";
import {UserEvents} from "./events/user.events";

@Module({
    imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
    controllers: [UsersController],
    components: [
        UsersController,
        UsersService,
        CryptoService,
        UserEvents
    ],

    exports: [MongooseModule]

})
export class UsersModule {
    constructor(userService: UsersService, userEvents: UserEvents) {
        UserSchema.plugin(autoIncrement.plugin, 'User');
        userEvents.run();
    }
}