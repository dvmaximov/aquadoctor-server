import { IsNotEmpty, IsString } from 'class-validator';

export class RequestUserDto {
  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  email: string;

  @IsNotEmpty({ message: 'Provide an password' })
  @IsString()
  password: string;

}
