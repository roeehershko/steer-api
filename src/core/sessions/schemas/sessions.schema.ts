import * as mongoose from 'mongoose';

export const SessionsSchema = new mongoose.Schema({
    name: String,
    events: Array,
    breed: String,
});
