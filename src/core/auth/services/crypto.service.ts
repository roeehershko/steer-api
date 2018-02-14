import { Component } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Component()
export class CryptoService {

    public async cryptPassword(password): Promise<string> {
        // generate a salt
        const salt = await bcrypt.genSalt(10);

        console.log('Salt: ');
        console.log(salt);
        // hash the password along with our new salt
        return await bcrypt.hash(password, salt);
    };

    public async comparePassword(plainPass, hashword): Promise<boolean> {
        return await bcrypt.compare(plainPass, hashword);
    }
}