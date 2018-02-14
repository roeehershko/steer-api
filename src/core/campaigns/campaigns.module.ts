import {Module} from '@nestjs/common';
import {CampaignsController} from "./campaigns.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {CampaignSchema} from "./schemas/campaigns";
import {CampaignsService} from "./services/campaign.service";
import * as autoIncrement from "mongoose-auto-increment";
import {UsersModule} from "../user/users.module";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Campaign', schema: CampaignSchema}
        ]),
        UsersModule
    ],
    controllers: [CampaignsController],
    components: [
        CampaignsController,
        CampaignsService
    ],
    exports: [ MongooseModule ]
})
export class CampaignsModule {

    constructor() {
        CampaignSchema.plugin(autoIncrement.plugin, 'Campaign');
    }
}
