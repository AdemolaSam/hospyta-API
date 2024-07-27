import {
    IsNotEmpty,
    IsOptional
} from "class-validator"
import { ApiProperty, ApiPropertyOptional} from "@nestjs/swagger"

export class PostQueryDto {
    @ApiPropertyOptional()
    @IsOptional()
    page: string

    @ApiPropertyOptional()
    @IsOptional()
    category: string

    @ApiPropertyOptional()
    @IsOptional()
    author: string

    @ApiPropertyOptional()
    @IsOptional()
    mostUpvoted: boolean

}