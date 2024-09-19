import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateAquadoctorDto {

  @IsNotEmpty({ message: 'Field userId must be added' })
  @IsNumber()
  userId: number;

  @IsNotEmpty({ message: 'Field musikId must be added' })
  @IsNumber()
  musikId: number;

}