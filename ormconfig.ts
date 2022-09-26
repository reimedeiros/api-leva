import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'us-cdbr-east-06.cleardb.net' || 'localhost',
        port: 3306,
        username: 'b645faf756b60f' || 'user',
        password: '400d3899' || 'password',
        database: 'heroku_2d13f1f952fa039' || 'db',
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/migrations/*.js'],
        synchronize: true,
        migrationsRun: true,
      });
      return dataSource.initialize();
    },
  },
];

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         type: 'mysql',
//         host: 'localhost',
//         port: 3306,
//         username: 'user',
//         password: 'password',
//         database: 'db',
//         entities: ['dist/**/*.entity.js'],
//         migrations: ['dist/migrations/*.js'],
//         synchronize: true,
//         migrationsRun: true,
//       });
//       return dataSource.initialize();
//     },
//   },
// ];
