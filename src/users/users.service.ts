import { Injectable, HttpStatus, NotFoundException, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ErrorConstants } from 'src/app/entities/error.constants';
import { CommonResponse } from 'src/app/entities/common.response';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async insert(createUserDto: CreateUserDto): Promise<CommonResponse> {
    let user = await this.userRepository.findOne({ where: { email: createUserDto.email } });
    if (user) {
      throw new HttpException (ErrorConstants.EmailAlwaysExists, HttpStatus.BAD_REQUEST);
    }
    user = this.userRepository.create(createUserDto);
    const res = await this.userRepository.save(user); 
    const responce: CommonResponse = {
      message: '',
      data: res,
    }
    return responce;       
  }

  async findAll(): Promise<CommonResponse> {
    const res = await this.userRepository.find();
    const responce: CommonResponse = {
      message: '',
      data: res,
    }
    return responce;      
  }

  async findOne(id: number): Promise<CommonResponse> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException(ErrorConstants.UserNotFound);
    }
    const responce: CommonResponse = {
      message: '',
      data: user,
    }
    return responce;   
  }

  async findByEmail(email: string): Promise<CommonResponse> {
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (!user) {
      throw new HttpException (ErrorConstants.UserNotFound, HttpStatus.BAD_REQUEST);
    }
    const responce: CommonResponse = {
      message: '',
      data: user,
    }    
    return (responce);  
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<CommonResponse> {
    const user = (await this.findOne(id)).data as User;
    Object.assign(user, updateUserDto);
    const res = await this.userRepository.save(user);
    const responce: CommonResponse = {
      message: '',
      data: res,
    }
    return responce;        
  }

  async delete(id: number): Promise<CommonResponse> {
    const res = await this.userRepository.delete(id);
    if (res.affected === 0) {
      throw new NotFoundException(`A user "${id}" was not found`);
    }
    const responce: CommonResponse = {
      message: 'successUserDelete',
      data: res,
    }
    return responce;   
  }
}
