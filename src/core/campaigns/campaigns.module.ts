import {Global, Module} from '@nestjs/common';
import {CampaignsController} from "./campaigns.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {CampaignSchema} from "./schemas/campaigns";
import {CampaignsService} from "./services/campaign.service";
import * as autoIncrement from "mongoose-auto-increment";
import {UsersModule} from "../user/users.module";
import {CampaignsEvents} from "./events/campaigns.events";
import {AgendaService} from "../../common/services/agenda.service";
import {SubscribeCampaignsJob} from "./jobs/subscribe-campaigns.job";

@Module({
    imports: [
        UsersModule,
        MongooseModule.forFeature([
            {name: 'Campaign', schema: CampaignSchema}
        ]),

    ],
    controllers: [CampaignsController],
    components: [
        CampaignsController,
        CampaignsService,
        CampaignsEvents,
        AgendaService,
        SubscribeCampaignsJob
    ],
    exports: [ MongooseModule, CampaignsService ]
})
export class CampaignsModule {

    constructor(agendaService: AgendaService, subCampaingsJob: SubscribeCampaignsJob) {
        agendaService.define('broadcast campaigns data', '15 seconds', subCampaingsJob);
        CampaignSchema.plugin(autoIncrement.plugin, 'Campaign');
    }
}
