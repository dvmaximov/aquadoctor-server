import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtService } from '@nestjs/jwt';
import { CommonResponse } from 'src/app/entities/common.response';


@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // insert(@Body() createUserDto: CreateUserDto): Promise<User> {
  //   return this.usersService.insert(createUserDto);
  // }

  @UseGuards(AuthGuard, RolesGuard) 
  @Get()
  @Roles(['admin'])
  @UseGuards(AuthGuard, RolesGuard)
  findAll(@Req() request: Request): Promise<CommonResponse> {
    return this.usersService.findAll();
  }
  @UseGuards(AuthGuard, RolesGuard) 
  @Get(':id')
  @Roles(['admin', 'user'])
  findOne(@Param('id') id: string, @Req() request: Request): Promise<CommonResponse> {
    return this.usersService.findOne(+id);
  }

  @UseGuards(AuthGuard, RolesGuard) 
  @Post(':id')
  @Roles(['admin', 'user'])
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<CommonResponse> {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(AuthGuard, RolesGuard) 
  @Delete(':id')
  @Roles(['admin', 'user'])
  delete(@Param('id') id: string): Promise<CommonResponse> {
    return this.usersService.delete(+id);
  }
}
