import { UserEntity } from '../src/users/entities/user.entity';
import { DataSource } from 'typeorm';

export const databaseProvidersTest = [
  {
    provide: 'DATA_SOURCE_TEST',
    useFactory: async () => {
      const dataSourceTest = new DataSource({
        type: 'better-sqlite3',
        database: 'bd-test',
        statementCacheSize: 100,
        nativeBinding: 'better_sqlite3.node',
        entities: [UserEntity],
      });
      return dataSourceTest.initialize();
    },
  },
];
