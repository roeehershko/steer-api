import * as mongoose from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import {Schema, Types} from "mongoose";


export const CampaignSchema = new Schema({
    name: String,
    landers: Array,
    sources: Array,
    user: {
        type: Number,
        ref: 'User'
    }
}, { versionKey: false });
