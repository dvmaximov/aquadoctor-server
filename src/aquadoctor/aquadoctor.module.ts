import { Module } from '@nestjs/common';
import { AquadoctorService } from './aquadoctor.service';
import { AquadoctorController } from './aquadoctor.controller';
import { Aquadoctor } from './entities/aquadoctor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musik } from 'src/musik/entities/musik.entity';
import { Diagnostic } from 'src/diagnostic/entities/diagnostic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aquadoctor, Musik, Diagnostic])],
  controllers: [AquadoctorController],
  providers: [AquadoctorService],
  exports: [AquadoctorService]
})
export class AquadoctorModule {}
