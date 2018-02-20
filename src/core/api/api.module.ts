import {Module} from '@nestjs/common';
import {CampaignsController} from "./controller/campaigns.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {CampaignsModule} from "../campaigns/campaigns.module";
import {UsersModule} from "../user/users.module";
import {AuthController} from "./controller/auth.controller";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [CampaignsModule, UsersModule, AuthModule, MongooseModule],
    controllers: [CampaignsController, AuthController],
    components: [
    ],
    exports: []

})
export class ApiModule {

}