import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterAuthDto {
  @MinLength(4)
  @IsString()
  @ApiProperty()
  username: string;

  @MinLength(4)
  @IsString()
  @ApiProperty()
  name: string;

  @MinLength(4)
  @IsString()
  @ApiProperty()
  lastname: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
