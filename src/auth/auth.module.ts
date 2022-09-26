import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { userProviders } from '../users/users.providers';
import { UsersModule } from '../users/users.module';
import { DatabaseModule } from '../database/database.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '60m'}
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, ...userProviders, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
