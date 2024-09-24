import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAquadoctorDto } from './dto/create-aquadoctor.dto';
import { UpdateAquadoctorDto } from './dto/update-aquadoctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aquadoctor } from './entities/aquadoctor.entity';
import { Repository } from 'typeorm';
import { Musik } from 'src/musik/entities/musik.entity';
import { CircleColor } from './entities/circle-color.entity';
import { Diagnostic } from 'src/diagnostic/entities/diagnostic.entity';
import { ErrorConstants } from 'src/app/entities/error.constants';
import { CommonResponse } from 'src/app/entities/common.response';

@Injectable()
export class AquadoctorService {
  constructor(
    @InjectRepository(Aquadoctor)
    private readonly aquadoctorRepository: Repository<Aquadoctor>,
    @InjectRepository(Musik)
    private readonly musikRepository: Repository<Musik>,
    @InjectRepository(Diagnostic)
    private readonly diagnosticRepository: Repository<Diagnostic>,
  ) {}


  async create(createAquadoctorDto: CreateAquadoctorDto): Promise<CommonResponse> {
    const musik = await this.musikRepository.findOne({where: {id: createAquadoctorDto.musikId}});
    if (!musik) {
        throw new HttpException (ErrorConstants.MusikNotFound, HttpStatus.BAD_REQUEST);
    }

    const diagnostics = await this.diagnosticRepository.find({where: {userId: createAquadoctorDto.userId}, order: {
      created: 'ASC',
    }});

    const diagnostic = 1;

    const programms = await this.aquadoctorRepository.find({where: {userId: createAquadoctorDto.userId}, order: {
      created: 'ASC',
    }});
    // if (diagnostics.length !== 0 && programms.length !== 0 ){
    if (programms.length !== 0 ){
      if (programms[programms.length - 1].diagnosticId == diagnostic) {
        throw new HttpException ('LastDiagnosticAlreadyUsed', HttpStatus.BAD_REQUEST);
      }
    }
    // if (diagnostics.length === 0) {
    //   throw new HttpException ('LastDiagnosticNotFound', HttpStatus.BAD_REQUEST);
    // }
    // const diagnostic = diagnostics[diagnostics.length - 1];
    

    

    // Проверка дата последней диагностики (например, больше 30 дней)
    // if (diagnostic.created) {
    //   throw new HttpException ('MustDiagnostic', HttpStatus.BAD_REQUEST);
    // }

    const color1 = new CircleColor;
    color1.id =  1;
    color1.size = 60;
    color1.color1 = "#fcdc0a";
    color1.color2 = "#0a97fc";
    color1.color3 = "#0afccc";
    color1.upTime = 3;
    color1.constTime = 8;
    color1.downTime = 5;
    color1.speed = 4;
    
    const color2 = new CircleColor;
    color2.id =  2;
    color2.size =  50;
    color2.color1 =  "#fa07cd";
    color2.color2 =  "#fab907";
    color2.color3 =  "#fa0707";
    color2.upTime =  6;
    color2.constTime =  3;
    color2.downTime =  6;
    color2.speed =  8;

    const color3 = new CircleColor;
    color3.id =  3;
    color3.size =  5;
    color3.color1 =  "#0afa1e";
    color3.color2 =  "#0a16fa";
    color3.color3 =  "#0afa1e";
    color3.upTime =  5;
    color3.constTime =  10;
    color3.downTime =  5;
    color3.speed =  10;

    const timestamp = new Date().getTime();

    const newAquadoctor = new Aquadoctor();
    newAquadoctor.userId = createAquadoctorDto.userId;
    newAquadoctor.musikId = createAquadoctorDto.musikId;
    // newAquadoctor.diagnosticId = diagnostic.id;
    newAquadoctor.diagnosticId = diagnostic;
    newAquadoctor.name = musik.name;
    newAquadoctor.musikPath = musik.path;
    newAquadoctor.created = timestamp;
    newAquadoctor.startDate = timestamp;
    newAquadoctor.endDate = timestamp;
    newAquadoctor.active = false;
    newAquadoctor.color1 = color1.toJson();
    newAquadoctor.color2 = color2.toJson();
    newAquadoctor.color3 = color3.toJson();


    const aquadoctor = this.aquadoctorRepository.create(newAquadoctor);
    const res = await this.aquadoctorRepository.save(aquadoctor);  
    const responce: CommonResponse = {
      message: 'aquadoctorAdded',
      data: res,
    }
    return responce;
  }

  async findAllbyUser(userId: number): Promise<CommonResponse> {
    const res = await this.aquadoctorRepository.find({where: {userId}, order: {id: 'DESC'}})
    const responce: CommonResponse = {
      message: '',
      data: res,
    }
    return responce;
  }

  // findOne(id: number): Promise<CommonResponse> {
  //   return `This action returns a #${id} aquadoctor`;
  // }

  async update(updateAquadoctorDto: UpdateAquadoctorDto): Promise<CommonResponse> {
    const res = await this.aquadoctorRepository.save(updateAquadoctorDto);
    const responce: CommonResponse = {
      message: '',
      data: res,
    }
    return responce;
  }

  async remove(id: number): Promise<CommonResponse> {
    const res = await this.aquadoctorRepository.delete(id);
    const responce: CommonResponse = {
      message: 'aquadoctorDeleted',
      data: res,
    }
    return responce;
  }
}
