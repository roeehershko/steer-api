import * as mongoose from 'mongoose';

export const PendingSessionsSchema = new mongoose.Schema({
    id: String,
    guid: String,
    ip: String,
    country: String,
    city: String,
    campaign: String,
    goal: String,
    source: String,
    tracking: Object,
    time: Date,
    postback: Object
}, {
    collection: 'pending_sessions',
    versionKey: false
});
