import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DiagnosticModule } from './diagnostic/diagnostic.module';
import { AquadoctorModule } from './aquadoctor/aquadoctor.module';
import { User } from './users/entities/user.entity';
import { Diagnostic } from './diagnostic/entities/diagnostic.entity';
import { Aquadoctor } from './aquadoctor/entities/aquadoctor.entity';
import { MusikModule } from './musik/musik.module';
import { Musik } from './musik/entities/musik.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'aquadoctor.sqlite',
      synchronize: true,
      entities: [User, Diagnostic, Aquadoctor, Musik],
    }),    
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'client'),
    }),
    AuthModule,
    UsersModule,
    DiagnosticModule,
    AquadoctorModule,
    MusikModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
