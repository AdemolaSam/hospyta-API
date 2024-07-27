import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsNotEmpty, IsEmail } from "class-validator"

export class CreateAuthDto {
    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    password: string
}

