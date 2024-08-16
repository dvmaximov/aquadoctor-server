import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMusikDto } from './dto/create-musik.dto';
import { UpdateMusikDto } from './dto/update-musik.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Musik } from './entities/musik.entity';
import { Repository } from 'typeorm';
import { unlink } from "node:fs/promises";

@Injectable()
export class MusikService {

  constructor(
    @InjectRepository(Musik)
    private readonly musikRepository: Repository<Musik>,
  ) {}

  async create(createMusikDto: CreateMusikDto) {
    let user = await this.musikRepository.findOne({ where: { name: createMusikDto.name } });
    if (user) {
      throw new HttpException ('MusikAlwaysExists', HttpStatus.BAD_REQUEST);
    }
    user = this.musikRepository.create(createMusikDto);
    return await this.musikRepository.save(user);  
  }

  async findAll() {
    return await this.musikRepository.find({
      order: {
          id: "DESC",
      },
  });
  }

  async findOne(id: number) {
    return await this.musikRepository.findOne({where:{id}});
  }

 async update(updateMusikDto: UpdateMusikDto) {
    return await this.musikRepository.save(updateMusikDto);
  }

 async  remove(id: number) {
  const forRemove = await this.findOne(id)
  await this.musikRepository.delete(id);
  if (forRemove) {
      await this.removeFile(`./client/musik/${forRemove.path}`)
  }

  }

  async removeFile(filePath: string) {
    try {
      await unlink(filePath);
    } catch (err) {
      console.log("An error occured: ", err.message);
    }
  }
}
