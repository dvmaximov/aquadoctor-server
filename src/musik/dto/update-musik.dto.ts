import { PartialType } from '@nestjs/mapped-types';
import { CreateMusikDto } from './create-musik.dto';

export class UpdateMusikDto extends PartialType(CreateMusikDto) {}
