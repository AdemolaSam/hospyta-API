import {
    IsNotEmpty
} from "class-validator"
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class CreateDownvoteDto {
    @ApiProperty()
    @IsNotEmpty()
    user: string

    @ApiPropertyOptional()
    post?: string

    @ApiPropertyOptional()
    reply?: string
}
