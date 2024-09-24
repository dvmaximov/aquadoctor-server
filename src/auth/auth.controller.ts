import { Body, Controller, Post, HttpCode, HttpStatus, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RequestUserDto } from 'src/users/dto/request-user.dto';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { CommonResponse } from 'src/app/entities/common.response';


@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signUp')
  async signUp(@Body() signUpDto: CreateUserDto): Promise<CommonResponse> {
    return await this.authService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signIn')
  async signIn(@Body() signInDto: RequestUserDto): Promise<CommonResponse> {
    return await this.authService.signIn(signInDto.email, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('getAuthUser')
  async getAuthUser(@Req() request: Request): Promise<CommonResponse> {
    return await this.authService.getAuthUser(request);
      
  }

}
