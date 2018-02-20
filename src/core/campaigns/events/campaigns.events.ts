import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CryptoService} from "../../auth/services/crypto.service";
import {Component} from "@nestjs/common";
import {CampaignSchema} from "../schemas/campaigns";
import {Campaign} from "../interfaces/campaign";
import {Client, ClientProxy, Transport} from "@nestjs/microservices";
import {CampaignsService} from "../services/campaign.service";

@Component()
export class CampaignsEvents {

    @Client({ transport: Transport.REDIS, url: 'redis://gateway:6379' })
    client: ClientProxy;

    constructor(@InjectModel(CampaignSchema) private readonly userModel: Model<Campaign>, private campaignsService: CampaignsService) {}

    async configure() {
        const self = this;
        console.log('POST SAVE');
        CampaignSchema.post('save', function() {
            console.log('SaveD!');
            console.log('SaveD!');
            let campaigns = this.campaignsService.find();
            self.client.send('campaigns.updated', campaigns);
        });
    }
}