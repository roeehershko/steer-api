import {Get, Controller, Post, Param, Body, Request} from '@nestjs/common';
import {CampaignsService} from "./services/campaign.service";
import {CreateCampaignDto} from "./dto/campaigns.dto";
import {Campaign} from "./interfaces/campaign";
import {Client, ClientProxy, MessagePattern, Transport} from "@nestjs/microservices";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Controller('/api/v1/campaigns')
export class CampaignsController {

    @Client({ transport: Transport.REDIS, url: 'redis://gateway:6379' })
    client: ClientProxy;

    constructor(private readonly campaignsService: CampaignsService) {}

    @Get()
    async find(@Request() req, @Body() data): Promise<Campaign[]> {
        return await this.campaignsService.find()
    }

    @Get('/:id')
    async findOne(@Param() params): Promise<Campaign> {
        return await this.campaignsService.findOne(params.id)
    }

    @Post()
    async create(@Body() data: CreateCampaignDto) {
        let res = await this.campaignsService.create(data);

        return {
            'success': 1,
            data: res
        }
    }

    @MessagePattern("campaigns")
    async campaigns(data) {
        let obs = new Subject();
        this.campaignsService.subscribe(obs);
        return obs;
    }
}
