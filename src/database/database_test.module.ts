import { Module } from '@nestjs/common';
import { databaseProviders } from '../../ormconfig';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModuleTest {}
