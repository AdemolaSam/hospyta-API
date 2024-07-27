import {
    IsNotEmpty,
    IsOptional
} from "class-validator"
import { ApiProperty, ApiPropertyOptional} from "@nestjs/swagger"

export class CreatePostDto {
    @ApiProperty()
    @IsNotEmpty()
    title: string

    @ApiProperty()
    @IsNotEmpty()
    content: string

    @ApiProperty()
    @IsNotEmpty()
    author: string

    @ApiPropertyOptional()
    @IsOptional()
    imageUrl: string

    @ApiProperty()
    @IsNotEmpty()
    category: string
}
