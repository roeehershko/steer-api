import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {CampaignsModule} from "./core/campaigns/campaigns.module";
import {CommonModule} from "./common/common.module";
import {AuthModule} from "./core/auth/auth.module";
import {UsersModule} from "./core/user/users.module";
import * as autoIncrement from 'mongoose-auto-increment';
import * as mongoose from 'mongoose';
import {SessionsModule} from "./core/sessions/sessions.module";
import {ApiModule} from "./core/api/api.module";

@Module({
  imports: [
      MongooseModule.forRoot(process.env.MONGO_URL),
      CommonModule,
      AuthModule,
      UsersModule,
      CampaignsModule,
      SessionsModule,
      ApiModule
  ],
  controllers: [],
  components: [
  ],
})
export class ApplicationModule {
    constructor() {
        autoIncrement.initialize(mongoose.connection);
    }
}
