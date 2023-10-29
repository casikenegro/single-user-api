import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @MinLength(4)
  @IsString()
  @ApiProperty()
  @IsOptional()
  username: string;

  @MinLength(4)
  @IsString()
  @ApiProperty()
  @IsOptional()
  name: string;

  @MinLength(4)
  @IsString()
  @ApiProperty()
  @IsOptional()
  lastname: string;

  @IsEmail()
  @ApiProperty()
  @IsOptional()
  email: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  password: string;
}
