import { Injectable, HttpStatus, NotFoundException, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ErrorConstants } from 'src/app/entities/error.constants';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async insert(createUserDto: CreateUserDto): Promise<User> {
    let user = await this.userRepository.findOne({ where: { email: createUserDto.email } });
    if (user) {
      throw new HttpException (ErrorConstants.EmailAlwaysExists, HttpStatus.BAD_REQUEST);
    }
    user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);  
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException(ErrorConstants.UserNotFound);
    }
    return (user);  
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (!user) {
      throw new HttpException (ErrorConstants.UserNotFound, HttpStatus.BAD_REQUEST);
    }
    return (user);  
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return await this.userRepository.save(user);
  }

  async delete(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`A user "${id}" was not found`);
    }
    return { message: 'User successfully deleted' };
  }
}
