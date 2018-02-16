import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Component} from "@nestjs/common";
import {PendingSessionsSchema} from "../schemas/pending-sessions.schema";
import {PendingSession} from "../types/pending-session.type";

@Component()
export class PendingSessionsEvents {

    constructor(@InjectModel(PendingSessionsSchema) private readonly userModel: Model<PendingSession>) {}

    async run() {
    }
}
