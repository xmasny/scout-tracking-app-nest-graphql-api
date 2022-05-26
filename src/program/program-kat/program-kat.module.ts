import { Module } from '@nestjs/common';
import { ProgramKatService } from './program-kat.service';
import { ProgramKatResolver } from './program-kat.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramKatRepository } from './program-kat.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProgramKatRepository])],
  providers: [ProgramKatResolver, ProgramKatService],
})
export class ProgramKatModule {}
