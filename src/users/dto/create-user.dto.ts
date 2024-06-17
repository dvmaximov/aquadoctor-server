import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  email: string;

  @IsNotEmpty({ message: 'Field firstName must be added' })
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsNotEmpty({ message: 'Field lastName must be added' })
  @IsString()
  lastName: string;

  @IsNotEmpty({ message: 'Provide an password' })
  @IsString()
  password: string;

  @IsNotEmpty({ message: 'Field gender must be added' })
  @IsString()
  gender: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  role?: 'admin' | 'user';

  @IsNotEmpty({ message: 'Field birthday must be added' })
  @IsNumber()
  birthday: number;
}
