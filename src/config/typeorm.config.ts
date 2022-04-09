import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: '',
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   database: 'sys',
// };

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'mysql80.websupport.sk',
  port: 3314,
  username: 'scouttapp',
  password: 'TrackingApp123',
  entities: ['dist/**/*.entity{.ts,.js}'],
  database: 'scouttapp',
};
