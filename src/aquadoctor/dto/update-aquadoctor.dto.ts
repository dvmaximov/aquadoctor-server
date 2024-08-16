import { PartialType } from '@nestjs/mapped-types';
import { CreateAquadoctorDto } from './create-aquadoctor.dto';

export class UpdateAquadoctorDto extends PartialType(CreateAquadoctorDto) {}
