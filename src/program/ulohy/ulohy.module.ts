import { Module } from '@nestjs/common';
import { UlohyService } from './ulohy.service';
import { UlohyResolver } from './ulohy.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UlohyRepository } from './ulohy.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UlohyRepository])],
  providers: [UlohyResolver, UlohyService],
})
export class UlohyModule {}
