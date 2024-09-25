import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMusikDto } from './dto/create-musik.dto';
import { UpdateMusikDto } from './dto/update-musik.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Musik } from './entities/musik.entity';
import { Repository } from 'typeorm';
import { unlink } from "node:fs/promises";
import { CommonResponse } from 'src/app/entities/common.response';
import { SuccessConstants } from 'src/app/entities/success.constants';

@Injectable()
export class MusikService {

  constructor(
    @InjectRepository(Musik)
    private readonly musikRepository: Repository<Musik>,
  ) {}

  async create(createMusikDto: CreateMusikDto): Promise<CommonResponse> {
    let user = await this.musikRepository.findOne({ where: { name: createMusikDto.name } });
    if (user) {
      throw new HttpException ('MusikAlwaysExists', HttpStatus.BAD_REQUEST);
    }
    user = this.musikRepository.create(createMusikDto);

    const res = await this.musikRepository.save(user);  
    const responce: CommonResponse = {
      message: SuccessConstants.MusikAdded,
      data: res,
    }
    return responce; 
  }

  async findAll(): Promise<CommonResponse>  {
    const res =  await this.musikRepository.find({
      order: {
          id: "DESC",
      },
    });
    const responce: CommonResponse = {
      message: '',
      data: res,
    }
    return responce;  
  }

  async findOne(id: number): Promise<CommonResponse> {
    const res = await this.musikRepository.findOne({where:{id}});
    const responce: CommonResponse = {
      message: '',
      data: res,
    }
    return responce;  
  }

 async update(updateMusikDto: UpdateMusikDto): Promise<CommonResponse> {
    const res = await this.musikRepository.save(updateMusikDto);
    const responce: CommonResponse = {
      message: '',
      data: res,
    }
    return responce;  
  }

 async  remove(id: number): Promise<CommonResponse> {
  const forRemove = (await this.findOne(id)).data as Musik;
  await this.musikRepository.delete(id);
  if (forRemove) {
      await this.removeFile(`./client/musik/${forRemove.path}`)
  }
  const responce: CommonResponse = {
    message: '',
    data: null,
  }
  return responce;  
  }

  async removeFile(filePath: string) {
    try {
      await unlink(filePath);
    } catch (err) {
      console.log("An error occured: ", err.message);
    }
  }
}
