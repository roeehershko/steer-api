import { Document } from 'mongoose';

export interface PendingSession extends Document {
    id?: string,
    ip: string,
    country: string,
    city: string,
    campaign: number,
    goal: string,
    source: string,
    [k: string]: any
}
