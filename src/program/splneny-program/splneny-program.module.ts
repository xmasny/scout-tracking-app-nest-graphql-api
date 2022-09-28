import { Module } from '@nestjs/common';
import { SplnenyProgramService } from './splneny-program.service';
import { SplnenyProgramResolver } from './splneny-program.resolver';

@Module({
  providers: [SplnenyProgramResolver, SplnenyProgramService],
})
export class SplnenyProgramModule {}
