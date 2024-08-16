import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DiagnosticService } from './diagnostic.service';
import { CreateDiagnosticDto } from './dto/create-diagnostic.dto';
import { UpdateDiagnosticDto } from './dto/update-diagnostic.dto';
import { Diagnostic } from './entities/diagnostic.entity';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('api/diagnostics')
export class DiagnosticController {
  constructor(private readonly diagnosticService: DiagnosticService) {}

  // @Roles(['user', 'admin'])
  @Roles(['user'])
  @UseGuards(AuthGuard, RolesGuard)
  @Post()
  async create(@Body() createDiagnosticDto: CreateDiagnosticDto) {
    console.log(createDiagnosticDto);
    return await this.diagnosticService.create(createDiagnosticDto);
  }

  @Roles(['user', 'admin'])
  @UseGuards(AuthGuard, RolesGuard)
  @Get(':userId')
  async findAll(@Param() params: any): Promise<Diagnostic[]> {
    return await this.diagnosticService.findAll(params.userId);
  }

  @Get('info/:id')
  findOne(@Param('id') id: string) {
    return this.diagnosticService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiagnosticDto: UpdateDiagnosticDto) {
    return this.diagnosticService.update(+id, updateDiagnosticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosticService.remove(+id);
  }
}
