import * as jwt from 'jsonwebtoken';
import { Component } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UserSchema} from "../../user/schemas/users";
import {User} from "../../user/interfaces/user";
import {CredentialsDto} from "../../api/dto/login.dto";
import {CryptoService} from "./crypto.service";

@Component()
export class AuthService {

    constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>, private crypto: CryptoService) {}

    async createToken(data: CredentialsDto) {
        let user = await this.userModel.findOne({
            email: data.email,
        });

        if ( ! user) return false;

        const isValid = await this.crypto.comparePassword(data.password, user.password);

        if (isValid) {
            const expiresIn = 60 * 60 * 1000, secretOrKey = 'secret';
            const token = jwt.sign(data, secretOrKey, { expiresIn });
            return {
                expires_in: expiresIn,
                access_token: token,
            };
        }
        else {
            return false;
        }
    }

    async validateUser(signedUser): Promise<boolean> {
        // put some validation logic here
        // for example query user by id / email / username
        return true;
    }
}