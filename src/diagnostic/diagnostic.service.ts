import { Injectable, HttpStatus, NotFoundException, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiagnosticDto } from './dto/create-diagnostic.dto';
import { UpdateDiagnosticDto } from './dto/update-diagnostic.dto';
import { Diagnostic } from './entities/diagnostic.entity';

@Injectable()
export class DiagnosticService {
  constructor(
    @InjectRepository(Diagnostic)
    private readonly diagnosticRepository: Repository<Diagnostic>,
  ) {}

  async create(createDiagnosticDto: CreateDiagnosticDto) {
    const check = await this.diagnosticRepository.find({where: {diagnosticId: createDiagnosticDto.diagnosticId, userId: createDiagnosticDto.userId}} );
    if (check.length == 0 || (check.length > 0 && createDiagnosticDto.created > check[0].created)) {
      const diagnostic = this.diagnosticRepository.create(createDiagnosticDto);
      return  await this.diagnosticRepository.save(diagnostic);  
    } else {
      throw new HttpException ('AlreadySaved', HttpStatus.BAD_REQUEST);
    }
  }

  // async findByUserIdAndIdOnUser(userId: number, diagnosticId: number) {
  //   return await this.diagnosticRepository.find({where: {diagnosticId, userId}} );
  // }

  async findAll(userId: number): Promise<Diagnostic[]> {
    return await this.diagnosticRepository.find({where: {userId}});
  }

  findOne(id: number) {
    return `This action returns a #${id} diagnostic`;
  }

  update(id: number, updateDiagnosticDto: UpdateDiagnosticDto) {
    return `This action updates a #${id} diagnostic`;
  }

  remove(id: number) {
    return `This action removes a #${id} diagnostic`;
  }
}
