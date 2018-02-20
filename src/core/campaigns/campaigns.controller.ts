import {Controller} from '@nestjs/common';
import {CampaignsService} from "./services/campaign.service";
import {Client, ClientProxy, MessagePattern, Transport} from "@nestjs/microservices";

@Controller('/api/v1/campaigns')
export class CampaignsController {

    @Client({ transport: Transport.REDIS, url: 'redis://gateway:6379' })
    client: ClientProxy;

    constructor(private readonly campaignsService: CampaignsService) {}

    @MessagePattern("campaigns.subscribe")
    async campaigns() {
        let campaigns = await this.campaignsService.find();

        return this.client.send('campaigns.updated', campaigns)
    }
}
