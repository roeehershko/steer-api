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
            revenue: Number,
            isDefault: Boolean
        }
    ],
    user: {
        type: Number,
        ref: 'User'
    }
}, { versionKey: false });

CampaignSchema.post('update', function() {
    console.log('SavedLIED');
    console.log('SavedLIED');
    console.log('SavedLIED');
  });