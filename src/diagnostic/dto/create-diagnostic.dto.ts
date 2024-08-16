import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateDiagnosticDto {
  @IsNotEmpty({ message: 'Field birthday must be added' })
  @IsNumber()
  created: number;

  @IsNotEmpty({ message: 'Field birthday must be added' })
  @IsNumber()
  userId: number;

  @IsNotEmpty({ message: 'Field birthday must be added' })
  @IsNumber()
  diagnosticId: number;

  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  hr: string;

  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  br: string;

  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  cardioSignal: string;

  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  hrSingleSignal: string;

  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  brSingleSignal: string;
  
  @IsNotEmpty({ message: 'Field birthday must be added' })
  @IsNumber()
  ifi: number;
  
  @IsNotEmpty({ message: 'Field birthday must be added' })
  @IsNumber()
  bsi: number;
  
  @IsNotEmpty({ message: 'Field birthday must be added' })
  @IsNumber()
  lf2hf: number;

  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  ci: string;  

  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  vpg: string;
  
  @IsNotEmpty({ message: 'Field birthday must be added' })
  @IsNumber()
  weightKg: number;  
  
  @IsNotEmpty({ message: 'Field birthday must be added' })
  @IsNumber()
  heightM: number;  
  
  @IsNotEmpty({ message: 'Field birthday must be added' })
  @IsNumber()
  sadMMHg: number;  
  
  @IsNotEmpty({ message: 'Field birthday must be added' })
  @IsNumber()
  dadMMHg: number;  
}