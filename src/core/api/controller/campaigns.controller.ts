import {Get, Controller, Post, Param, Body, Request} from '@nestjs/common';
import {CampaignsService} from "../../campaigns/services/campaign.service";
import {Campaign} from "../../campaigns/interfaces/campaign";
import {CreateCampaignDto} from "../dto/campaigns.dto";

@Controller('/api/v1/campaigns')
export class CampaignsController {

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
        return await this.campaignsService.create(data);
    }
}
