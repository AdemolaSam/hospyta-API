import {
    IsNotEmpty,
    IsOptional
} from "class-validator"
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class CreateUpvoteDto {
    @ApiProperty()
    @IsNotEmpty()
    user: string

    @ApiPropertyOptional()
    @IsOptional()
    post: string

    @ApiPropertyOptional()
    @IsOptional()
    reply: string
}
