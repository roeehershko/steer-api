import * as mongoose from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import {Schema, Types} from "mongoose";


export const CampaignSchema = new Schema({
    name: String,
    code: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { versionKey: false });
