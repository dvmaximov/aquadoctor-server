import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { MusikService } from './musik.service';
import { CreateMusikDto } from './dto/create-musik.dto';
import { UpdateMusikDto } from './dto/update-musik.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from "multer";
import { Musik } from './entities/musik.entity';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('api/musik')
export class MusikController {
  constructor(private readonly musikService: MusikService) {}

  @UseGuards(AuthGuard, RolesGuard) 
  @Post("upload")
  @Roles(['admin'])
  @UseInterceptors(
    FileInterceptor("musik", {
      storage: diskStorage({ destination: "./client/musik", filename: (req, file, cb) => {
        const name = Buffer.from(file.originalname, "latin1").toString(
          "utf8",
          );
        cb(null, name)
      }}),
    }),
  )
  async create(@UploadedFile() file: Express.Multer.File) {

    const musik = await this.musikService.findAll();

    file.originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf8",
      );
    if (musik.length !== 0) {
      const checkmusik: Musik[] = musik.filter(
        (item: Musik) => item.path === file.originalname,
        );

        if (checkmusik.length !== 0) {
          // this.musikService.removeFile(file.path);
          throw new HttpException(
            "MusikAlreadyExists",
            
            HttpStatus.CONFLICT,
            );
          }
        }
    let path = "";
    if (file.path) {
      const parts = file.path.split("\\");
      path = parts[parts.length - 1];
    }

    const newMusik: CreateMusikDto = {
      name: file.originalname.split('.')[0],
      path: file.originalname,
      description:JSON.stringify({
        'ru': '',
      }),
      created: new Date().getTime(),
    };

    await this.musikService.create(newMusik);
    return `MusikAdded`;
  }

  @UseGuards(AuthGuard, RolesGuard) 
  @Get()
  @Roles(['admin', 'user'])
  findAll() {
    return this.musikService.findAll();
  }

  @UseGuards(AuthGuard, RolesGuard) 
  @Get(':id')
  @Roles(['admin', 'user'])
  findOne(@Param('id') id: string) {
    return this.musikService.findOne(+id);
  }

  @UseGuards(AuthGuard, RolesGuard) 
  @Post()
  @Roles(['admin'])
  update(@Body() updateMusikDto: UpdateMusikDto) {
    return this.musikService.update(updateMusikDto);
  }

  @UseGuards(AuthGuard, RolesGuard) 
  @Delete('remove/:id')
  @Roles(['admin'])
  remove(@Param('id') id: string) {
    return this.musikService.remove(+id);
  }
}
