import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SplnenyProgramService } from './splneny-program.service';
import { SplnenyProgram } from './splneny-program.entity';

@Resolver(() => SplnenyProgram)
export class SplnenyProgramResolver {
  constructor(private readonly splnenyProgramService: SplnenyProgramService) {}
}
