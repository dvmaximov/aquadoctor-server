import { Module } from '@nestjs/common';
import { MusikService } from './musik.service';
import { MusikController } from './musik.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musik } from './entities/musik.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Musik])],
  controllers: [MusikController],
  providers: [MusikService],
  exports: [MusikService]
})
export class MusikModule {}
