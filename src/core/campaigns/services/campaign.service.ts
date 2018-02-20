import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Campaign} from "../interfaces/campaign";
import {CampaignSchema} from "../schemas/campaigns";
import {Model} from "mongoose";
import {UserSchema} from "../../user/schemas/users";
import {User} from "../../user/interfaces/user";
import {Client, ClientProxy, Transport} from "@nestjs/microservices";

@Component()
export class CampaignsService {

    constructor(
        @InjectModel(CampaignSchema) private readonly campaignModel: Model<Campaign>,
        @InjectModel(UserSchema) private readonly userModel: Model<User>,
    ) {
    }

    async create(data): Promise<Campaign> {
        const campaign = new this.campaignModel(data);

        return campaign.save();
    }
    async find(): Promise<Campaign[]> {
        return await this.campaignModel.find().exec();
    }

    async findOne(id: Number): Promise<Campaign> {
        return await this.campaignModel.findById(id).exec();
    }
}