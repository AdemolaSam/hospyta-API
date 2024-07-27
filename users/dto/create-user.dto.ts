import {
    IsNotEmpty,
    IsOptional,
    IsEmail
} from "class-validator"
import {
    ApiProperty,
    ApiPropertyOptional
} from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    username: string

    @ApiProperty()
    @IsEmail()
    email: string

    @ApiPropertyOptional()
    @IsOptional()
    imageUrl: string

    @ApiProperty()
    @IsNotEmpty()
    password: string

}
