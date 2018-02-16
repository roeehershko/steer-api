import {Component, Inject} from "@nestjs/common";
import {PendingSession} from "../types/pending-session.type";
import {RedisClient} from "redis";

@Component()
export class SessionService {

    constructor() {}

    public async bulk(data: PendingSession[]) {
        // Get campaign event
    }
}
