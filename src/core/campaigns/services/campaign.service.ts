import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Campaign} from "../interfaces/campaign";
import {CampaignSchema} from "../schemas/campaigns";
import {Model} from "mongoose";
import {UserSchema} from "../../user/schemas/users";
import {User} from "../../user/interfaces/user";
import {Subject} from "rxjs/Subject";

@Component()
export class CampaignsService {
    constructor(
        @InjectModel(CampaignSchema) private readonly campaignModel: Model<Campaign>,
        @InjectModel(UserSchema) private readonly userModel: Model<User>,
    ) {}

    create(data): void {
        const campaign = new this.campaignModel(data);

        campaign.save();
    }
    async find(): Promise<Campaign[]> {
        let campaigns = await this.campaignModel.find().exec();

        return campaigns;
    }

    async findOne(id: Number): Promise<Campaign> {
        return await this.campaignModel.findById(id).exec();
    }

    async subscribe(subj: Subject<any>) {
        const self = this;
        setTimeout(async function () {
            let campaigns = await self.campaignModel.find().exec();
            subj.next(campaigns);
            subj.unsubscribe();
        }, 3000);
    }
}