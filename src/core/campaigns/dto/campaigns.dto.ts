import { IsString, IsInt, MinLength, MaxLength, IsNumber } from 'class-validator';

export class CreateCampaignDto {

    @IsString()
    @MinLength(4)
    @MaxLength(100)
    readonly name: String;

    @IsString()
    @MinLength(4)
    @MaxLength(18)
    readonly code: String;

    @IsNumber()
    @MinLength(0)
    readonly user_id: Number
}