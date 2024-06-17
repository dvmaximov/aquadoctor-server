import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserResponce } from 'src/users/entities/user.response';
import { RequestUserDto } from 'src/users/dto/request-user.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signUp')
  async signUp(@Body() signUpDto: CreateUserDto): Promise<UserResponce> {
      return await this.authService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signIn')
  async signIn(@Body() signInDto: RequestUserDto): Promise<UserResponce> {
      return await this.authService.signIn(signInDto.email, signInDto.password);
  }

  // @HttpCode(HttpStatus.OK)
  // @Post('login')
  // async signIn(@Body() signInDto: Record<string, any>): Promise<ApiResult> {
  //   const answer = { ...initResult };
  //   try {
  //     const token = await this.authService.signIn(
  //       'pulsar-admin',
  //       signInDto.password,
  //     );
  //     answer.result = { ...token };
  //   } catch (err) {
  //     answer.error = err;
  //   }
  //   return answer;
  // }

  // @HttpCode(HttpStatus.OK)
  // @Post('change')
  // async change(@Body() signInDto: Record<string, any>): Promise<ApiResult> {
  //   const answer = { ...initResult };
  //   try {
  //     answer.result = await this.authService.getHash(
  //       'pulsar-admin',
  //       signInDto.password,
  //     );
  //   } catch (err) {
  //     answer.error = err;
  //   }
  //   return answer;
  // }
}
