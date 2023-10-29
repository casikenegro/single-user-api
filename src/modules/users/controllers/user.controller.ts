import {
  Controller,
  Get,
  UseGuards,
  Req,
  Body,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { AuthGuard } from '../../../core/guards/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from '../dto/update-user.dto';

@ApiBearerAuth()
@ApiTags('users')
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get('my-user')
  myUser(@Req() request: any): Promise<any> {
    return this.usersService.myUser(request['user'].id);
  }

  @HttpCode(HttpStatus.OK)
  @Put('update')
  update(@Body() updateDto: UpdateUserDto, @Req() request: any) {
    return this.usersService.update(request['user'].id, updateDto);
  }
}
