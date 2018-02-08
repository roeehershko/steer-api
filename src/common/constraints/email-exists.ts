import {ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";
import * as mongoose from 'mongoose';
import {UserSchema} from "../../core/user/schemas/users";

@ValidatorConstraint({ name: "customText", async: false })
export class UniqueEmail implements ValidatorConstraintInterface {

    async validate(text: string, args: ValidationArguments) {
        let UserModel = mongoose.connection.model('User', UserSchema);

        const user = await UserModel.find({ email: text });

        return user.length === 0
    }

    defaultMessage(args: ValidationArguments) {
        return "Email already exists";
    }
}