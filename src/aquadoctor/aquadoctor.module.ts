import { Module } from '@nestjs/common';
import { AquadoctorService } from './aquadoctor.service';
import { AquadoctorController } from './aquadoctor.controller';

@Module({
  controllers: [AquadoctorController],
  providers: [AquadoctorService],
})
export class AquadoctorModule {}
