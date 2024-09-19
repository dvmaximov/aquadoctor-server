import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { CryptModule } from '../crypt/crypt.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    CryptModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      // signOptions: { expiresIn: `${1*24*60*60}s` },
      signOptions: { expiresIn: `${5*60}s` },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
