import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramResolver } from './program.resolver';
import { ProgramRepository } from './program.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VekKatModule } from './vek-kat/vek-kat.module';
import { ExpertskeOdborkyModule } from './expertske-odborky/expertske-odborky.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProgramRepository]), VekKatModule, ExpertskeOdborkyModule],
  providers: [ProgramResolver, ProgramService],
})
export class ProgramModule {}
