import { Document } from 'mongoose';

export interface User extends Document {
    first_name: String,
    last_name: String,
    email: String,
    password: String
}