import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

export const userProvidersTest = [
  {
    provide: 'USER_TEST_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE_TEST'],
  },
];
