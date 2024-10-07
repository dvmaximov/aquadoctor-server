import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DiagnosticService } from './diagnostic.service';
import { CreateDiagnosticDto } from './dto/create-diagnostic.dto';
import { UpdateDiagnosticDto } from './dto/update-diagnostic.dto';
import { Diagnostic } from './entities/diagnostic.entity';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { CommonResponse } from 'src/app/entities/common.response';

@Controller('api/diagnostics')
export class DiagnosticController {
  constructor(private readonly diagnosticService: DiagnosticService) {}

  // @Roles(['user', 'admin'])
  @Roles(['user', 'admin'])
  @UseGuards(AuthGuard, RolesGuard)
  @Post()
  async create(@Body() createDiagnosticDto: CreateDiagnosticDto): Promise<CommonResponse> {
    return await this.diagnosticService.create(createDiagnosticDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Get(':userId')
  @Roles(['user', 'admin'])
  async findAll(@Param() params: any): Promise<CommonResponse> {
    return await this.diagnosticService.findAll(params.userId);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Delete('remove/:id')
  @Roles(['admin', 'user'])
  remove(@Param('id') id: string): Promise<CommonResponse> {
    return this.diagnosticService.remove(+id);
  }


  // @Roles(['user'])
  // @UseGuards(AuthGuard, RolesGuard)  
  // @Get('info/:id')
  // findOne(@Param('id') id: string): Promise<CommonResponse> {
  //   return this.diagnosticService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDiagnosticDto: UpdateDiagnosticDto): Promise<CommonResponse> {
  //   return this.diagnosticService.update(+id, updateDiagnosticDto);
  // }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(['user', 'admin'])
  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<CommonResponse> {
  //   return this.diagnosticService.remove(+id);
  // }
}
