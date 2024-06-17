import { IsString, IsEmail, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  gender: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  role?: 'admin' | 'user';

  @IsOptional()
  @IsNumber()
  birthday: number;
}