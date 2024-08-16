import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMusikDto {
  @IsNotEmpty({ message: 'Field name must be added' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Field path must be added' })
  @IsString()
  path: string;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsNotEmpty({ message: 'Field description must be added' })
  @IsString()
  description: string;

  @IsNotEmpty({ message: 'Field description must be added' })
  @IsNumber()
  created: number;

}
