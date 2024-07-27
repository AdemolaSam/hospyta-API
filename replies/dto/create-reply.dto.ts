import {
    IsNotEmpty,
    IsOptional
} from "class-validator"
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class CreateReplyDto {
    @ApiProperty()
    @IsNotEmpty()
    comment: string
    
    @ApiProperty()
    @IsNotEmpty()
    author: string

    @ApiPropertyOptional()
    @IsOptional()
    post: string

    @ApiPropertyOptional()
    @IsOptional()
    parentReply: string

}
