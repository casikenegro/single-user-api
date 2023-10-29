import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { User } from '@prisma/client';
import { UpdateUserDto } from '../dto/update-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async myUser(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateDto: UpdateUserDto): Promise<User | null> {
    let user = await this.myUser(id);
    if (!user) {
      return null;
    }
    if (updateDto?.password) {
      updateDto.password = await hash(updateDto.password, 10);
    }
    user = {
      ...user,
      ...updateDto,
    };
    await this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return user;
  }
}
