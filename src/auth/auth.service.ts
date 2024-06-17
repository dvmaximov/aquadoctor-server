import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CryptService } from '../crypt/crypt.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserResponce } from 'src/users/entities/user.response';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly crypt: CryptService,
  ) {}

  async signIn(email: string, password: string): Promise<UserResponce> {
    const user = await this.usersService.findByEmail(email);
    const check = await this.crypt.match(password, user?.password);
    if (!check) {
      throw new HttpException ('BadUserPassword', HttpStatus.BAD_REQUEST);
    }
    const payload = { sub: user.id, email: user.email };
    const token =  await this.jwtService.signAsync(payload);
    delete user.password
    return {token, user}
  }

  async signUp(createUserDto: CreateUserDto): Promise<UserResponce> {
    const newUser = await this.getHash(createUserDto);
    await this.usersService.insert(newUser);
    let created = await this.usersService.findByEmail(newUser.email);
    const check = await this.crypt.match(createUserDto.password, created?.password);
    if (!check) {
      throw new HttpException ('BadUserPassword', HttpStatus.BAD_REQUEST);
    }
    const payload = { sub: created.id, email: created.email };
    const token =  await this.jwtService.signAsync(payload);
    delete created.password;
    return {token, user: created}
  }

  private async getHash(user: CreateUserDto): Promise<CreateUserDto> {
    const {...newUser} = user;
    const newHash = await this.crypt.getHash(newUser.password);
    newUser.password = newHash;
    return newUser;
  }
}
