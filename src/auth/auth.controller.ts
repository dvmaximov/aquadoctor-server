import { Body, Controller, Post, HttpCode, HttpStatus, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserResponse } from 'src/users/entities/user.response';
import { RequestUserDto } from 'src/users/dto/request-user.dto';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';


@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signUp')
  async signUp(@Body() signUpDto: CreateUserDto): Promise<UserResponse> {
    //   console.log('/////signUpDto', signUpDto);
      const res =   await this.authService.signUp(signUpDto);
    //   console.log('/////res', res);
      return res;
  }

  @HttpCode(HttpStatus.OK)
  @Post('signIn')
  async signIn(@Body() signInDto: RequestUserDto): Promise<UserResponse> {
      const res =  await this.authService.signIn(signInDto.email, signInDto.password);
      return res;
  }

  @HttpCode(HttpStatus.OK)
  @Post('getAuthUser')
  async getAuthUser(@Req() request: Request): Promise<User | null> {
    return  await this.authService.getAuthUser(request);
  }

}
