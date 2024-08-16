import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateAquadoctorDto {
  @IsNotEmpty({ message: 'Field created must be added' })
  @IsNumber()
  created: number;

  @IsNotEmpty({ message: 'Field userId must be added' })
  @IsNumber()
  userId: number;

}