import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CryptService } from '../crypt/crypt.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AdminLink, UserResponse } from 'src/users/entities/user.response';
import { User } from 'src/users/entities/user.entity';
import { Request } from 'express';
import { ErrorConstants } from 'src/app/entities/error.constants';

const adminLinks: AdminLink[] = [ 
  {
    title: 'userList',
    caption: '',
    icon: '',
    link: '/users',
  },
  {
    title: 'aquadoctor',
    caption: '',
    icon: '',
    link: '/musik',
  },
  // {
  //   title: 'breathing',
  //   caption: '',
  //   icon: '',
  //   link: '/breathing',
  // },
]

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly crypt: CryptService,
  ) {}

  async signIn(email: string, password: string): Promise<UserResponse> {
    const user = await this.usersService.findByEmail(email);
    const check = await this.crypt.match(password, user?.password);
    if (!check) {
      throw new HttpException (ErrorConstants.BadUserPassword, HttpStatus.BAD_REQUEST);
    }
    const payload = { sub: user.id, email: user.email, role: user.role };
    const token =  await this.jwtService.signAsync(payload);
    let links = [];
    if (user.role == 'admin') {
      links = adminLinks;
    }
    delete user.password
    delete user.role;
    const response: UserResponse = { token, user, links }
    return response
  }

  async signUp(createUserDto: CreateUserDto): Promise<UserResponse> {
    const newUser = await this.getHash(createUserDto);
    await this.usersService.insert(newUser);
    let created = await this.usersService.findByEmail(newUser.email);
    const check = await this.crypt.match(createUserDto.password, created?.password);
    if (!check) {
      throw new HttpException (ErrorConstants.BadUserPassword, HttpStatus.BAD_REQUEST);
    }
    const payload = { sub: created.id, email: created.email };
    const token =  await this.jwtService.signAsync(payload);
    let links = [];
    if (newUser.role == 'admin') {
      links = adminLinks;
    }
    delete created.password;
    delete created.role;
    return {token, user: created, links}
  }

  async getAuthUser(request: Request): Promise<User> {
    const jwt = request.headers.authorization.replace('Bearer ', '');
    const userInfo = this.jwtService.decode(jwt, { json: true });
    const finded = await this.usersService.findOne(userInfo.sub);
    if (finded) {
      if (finded.role == 'admin') {
        finded['links'] = adminLinks;
      }
    } else {
      finded['links'] = [];
    }
    delete finded.password;
    delete finded.role;
    return finded
  }

  private async getHash(user: CreateUserDto): Promise<CreateUserDto> {
    const {...newUser} = user;
    const newHash = await this.crypt.getHash(newUser.password);
    newUser.password = newHash;
    return newUser;
  }
}
