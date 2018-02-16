import {Component} from "@nestjs/common";
import {Job} from "../../../common/types/job.type";
import {PendingSessionsSchema} from "../schemas/pending-sessions.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {PendingSession} from "../types/pending-session.type";
import {CampaignSchema} from "../../campaigns/schemas/campaigns";
import {Campaign} from "../../campaigns/interfaces/campaign";

@Component()
export class ProcessPendingJob implements Job {

    constructor(
        @InjectModel(PendingSessionsSchema) private readonly pendingSessionModel: Model<PendingSession>,
        @InjectModel(CampaignSchema) private readonly campaignModel: Model<Campaign>,
    ) {}

    public async run(done) {
        let pendingSessions = await this.pendingSessionModel
            .find({ postback: { $ne: true } }).limit(50).exec();

        pendingSessions.forEach(function (pendingSession) {

        });
    }
}