import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `${process.env.MONGO_HOST}://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB_NAME}/?retryWrites=true&w=majority`,
    ),
  ],
=======
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import 'reflect-metadata';

@Module({
  imports: [UsersModule, DatabaseModule],
>>>>>>> f42f3be35c8d2d7b617eaa4740242949ef649cf5
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
