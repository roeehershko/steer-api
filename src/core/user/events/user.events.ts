import {UserSchema} from "../schemas/users";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "../interfaces/user";
import {CryptoService} from "../../auth/services/crypto.service";
import {Component} from "@nestjs/common";

@Component()
export class UserEvents {

    constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>, private crypto: CryptoService) {}
    async run() {
        const self = this;
        UserSchema.pre('save', async function(next) {
            const user = this;
            // only hash the password if it has been modified (or is new)
            if ( ! user.isModified('password')) return next();
            // Encrypt password
            user.password = await self.crypto.cryptPassword(user.password)
            next();
        });
    }
}