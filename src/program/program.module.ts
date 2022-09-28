import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramResolver } from './program.resolver';
import { ProgramRepository } from './program.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VekKatModule } from './vek-kat/vek-kat.module';
import { ExpertskeOdborkyModule } from './expertske-odborky/expertske-odborky.module';
import { SplnenyProgramModule } from './splneny-program/splneny-program.module';
import { ProgramKatModule } from './program-kat/program-kat.module';
import { StupenModule } from './stupen/stupen.module';
import { UlohyModule } from './ulohy/ulohy.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProgramRepository]),
    VekKatModule,
    ExpertskeOdborkyModule,
    SplnenyProgramModule,
    ProgramKatModule,
    StupenModule,
    UlohyModule,
  ],
  providers: [ProgramResolver, ProgramService],
})
export class ProgramModule {}
