import { Injectable } from '@nestjs/common';
import { CreateAquadoctorDto } from './dto/create-aquadoctor.dto';
import { UpdateAquadoctorDto } from './dto/update-aquadoctor.dto';

@Injectable()
export class AquadoctorService {
  create(createAquadoctorDto: CreateAquadoctorDto) {
    return 'This action adds a new aquadoctor';
  }

  findAll() {
    return `This action returns all aquadoctor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aquadoctor`;
  }

  update(id: number, updateAquadoctorDto: UpdateAquadoctorDto) {
    return `This action updates a #${id} aquadoctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} aquadoctor`;
  }
}
