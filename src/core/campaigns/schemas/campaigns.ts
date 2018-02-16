import * as mongoose from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import {Schema} from "mongoose";


export const CampaignSchema = new Schema({
    name: String,
    landers: Array,
    sources: [{
        name: String,
        code: String,
        costs: [{
            goal: String,
            cost: Number

        }]
    }],
    goals: [
        {
            name: String,
            code: String,
            cost: Number,
            revenue: Number
        }
    ],
    user: {
        type: Number,
        ref: 'User'
    }
}, { versionKey: false });
