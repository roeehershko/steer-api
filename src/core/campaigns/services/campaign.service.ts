import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Campaign} from "../interfaces/campaign";
import {CampaignSchema} from "../schemas/campaigns";
import {Model} from "mongoose";

@Component()
export class CampaignsService {
    constructor(@InjectModel(CampaignSchema) private readonly campaignModel: Model<Campaign>) {}

    async create(data): Promise<Campaign> {
        const campaign = new this.campaignModel(data);
        return await campaign.save();
    }

    async find(): Promise<Campaign[]> {
        return await this.campaignModel.find().exec();
    }

    async findOne(id: Number): Promise<Campaign> {
        return await this.campaignModel.findById(id).exec();
    }
}