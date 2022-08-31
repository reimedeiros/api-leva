import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'user',
        password: 'password',
        database: 'db',
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/migrations/*.js'],
        synchronize: true,
        migrationsRun: true,
      });

      return dataSource.initialize();
    },
  },
];
