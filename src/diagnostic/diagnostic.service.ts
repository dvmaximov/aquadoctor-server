import { Injectable, HttpStatus, NotFoundException, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiagnosticDto } from './dto/create-diagnostic.dto';
import { UpdateDiagnosticDto } from './dto/update-diagnostic.dto';
import { Diagnostic } from './entities/diagnostic.entity';
import { ErrorConstants } from 'src/app/entities/error.constants';
import { CommonResponse } from 'src/app/entities/common.response';

@Injectable()
export class DiagnosticService {
  constructor(
    @InjectRepository(Diagnostic)
    private readonly diagnosticRepository: Repository<Diagnostic>,
  ) {}

  async create(createDiagnosticDto: CreateDiagnosticDto): Promise<CommonResponse> {
    const check = await this.diagnosticRepository.find({where: {diagnosticId: createDiagnosticDto.diagnosticId, userId: createDiagnosticDto.userId}} );
    if (check.length == 0 || (check.length > 0 && createDiagnosticDto.created > check[0].created)) {
      const diagnostic = this.diagnosticRepository.create(createDiagnosticDto);
      const res =  await this.diagnosticRepository.save(diagnostic);
      const responce: CommonResponse = {
        message: '',
        data: res,
      }
      return responce;
    } else {
      throw new HttpException (ErrorConstants.AlreadySaved, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(userId: number): Promise<CommonResponse> {
    const res = await this.diagnosticRepository.find({where: {userId}});
    const responce: CommonResponse = {
      message: '',
      data: res,
    }
    return responce;
  }

  // findOne(id: number): Promise<CommonResponse> {
  //   return `This action returns a #${id} diagnostic`;
  // }

  // update(id: number, updateDiagnosticDto: UpdateDiagnosticDto): Promise<CommonResponse> {
  //   return `This action updates a #${id} diagnostic`;
  // }

  // remove(id: number): Promise<CommonResponse> {
  //   return `This action removes a #${id} diagnostic`;
  // }
}
