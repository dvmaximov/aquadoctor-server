import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AquadoctorService } from './aquadoctor.service';
import { CreateAquadoctorDto } from './dto/create-aquadoctor.dto';
import { UpdateAquadoctorDto } from './dto/update-aquadoctor.dto';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('api/aquadoctor')
export class AquadoctorController {
  constructor(private readonly aquadoctorService: AquadoctorService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Post('/insert')
  @Roles(['admin'])
  create(@Body() createAquadoctorDto: CreateAquadoctorDto) {
    return this.aquadoctorService.create(createAquadoctorDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Post()
  @Roles(['admin'])
  update(@Body() createAquadoctorDto: CreateAquadoctorDto) {
    return this.aquadoctorService.update(createAquadoctorDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Get(':userId')
  @Roles(['admin', 'user'])
  findAllbyUser(@Param('userId') userId: string) {
    return this.aquadoctorService.findAllbyUser(+userId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.aquadoctorService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAquadoctorDto: UpdateAquadoctorDto) {
  //   return this.aquadoctorService.update(+id, updateAquadoctorDto);
  // }

  @UseGuards(AuthGuard, RolesGuard)
  @Delete('remove/:id')
  @Roles(['admin', 'user'])
  remove(@Param('id') id: string) {
    return this.aquadoctorService.remove(+id);
  }
}
