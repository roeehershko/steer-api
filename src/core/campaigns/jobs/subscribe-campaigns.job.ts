import {Component} from "@nestjs/common";
import {Job} from "../../../common/types/job.type";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CampaignSchema} from "../schemas/campaigns";
import {Campaign} from "../interfaces/campaign";
import {Client, ClientProxy, Transport} from "@nestjs/microservices";

@Component()
export class SubscribeCampaignsJob implements Job {

    @Client({ transport: Transport.REDIS, url: 'redis://gateway:6379' })
    client: ClientProxy;

    constructor(
        @InjectModel(CampaignSchema) private readonly campaignModel: Model<Campaign>,
    ) {}

    public async run(done) {
        let campaigns = await this.campaignModel.find().exec();
        this.client.send('campaigns.updated', campaigns).subscribe();
        done();
    }
}