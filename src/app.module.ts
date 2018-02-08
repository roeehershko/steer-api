import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {CampaignsModule} from "./core/campaigns/campaigns.module";
import {CommonModule} from "./common/common.module";
import {AuthModule} from "./core/auth/auth.module";
import {UsersModule} from "./core/user/users.module";
import * as autoIncrement from 'mongoose-auto-increment';
import * as mongoose from 'mongoose';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://192.168.99.100/predix'),
      CommonModule,
      AuthModule,
      CampaignsModule,
      UsersModule
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
