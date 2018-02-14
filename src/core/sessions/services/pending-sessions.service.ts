import {Component, Inject} from "@nestjs/common";
import {PendingSession} from "../types/pending-session.type";
import {RedisClient} from "redis";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {PendingSessionsSchema} from "../schemas/pending-sessions.schema";

@Component()
export class PendingSessionService {

    constructor(@InjectModel(PendingSessionsSchema) private readonly pendingSessionModel: Model<PendingSession>) {}

    public async bulk(data: Array<string>) {
        // Converting JSON sessions to objects
        let dataArray = [];
        data.forEach(function (val) {
            dataArray.push(JSON.parse(val));
        });

        // Insert all sessions to pending collection
        this.pendingSessionModel.insertMany(dataArray);
    }
}
