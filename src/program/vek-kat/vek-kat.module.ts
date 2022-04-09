import { Module } from '@nestjs/common';
import { VekKatService } from './vek-kat.service';
import { VekKatResolver } from './vek-kat.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VekovaKatRepository } from './vek-kat.repository';

@Module({
  imports: [TypeOrmModule.forFeature([VekovaKatRepository])],
  providers: [VekKatResolver, VekKatService],
})
export class VekKatModule {}
