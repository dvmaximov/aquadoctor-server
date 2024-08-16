import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AquadoctorService } from './aquadoctor.service';
import { CreateAquadoctorDto } from './dto/create-aquadoctor.dto';
import { UpdateAquadoctorDto } from './dto/update-aquadoctor.dto';

@Controller('aquadoctor')
export class AquadoctorController {
  constructor(private readonly aquadoctorService: AquadoctorService) {}

  @Post()
  create(@Body() createAquadoctorDto: CreateAquadoctorDto) {
    return this.aquadoctorService.create(createAquadoctorDto);
  }

  @Get()
  findAll() {
    return this.aquadoctorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aquadoctorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAquadoctorDto: UpdateAquadoctorDto) {
    return this.aquadoctorService.update(+id, updateAquadoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aquadoctorService.remove(+id);
  }
}
