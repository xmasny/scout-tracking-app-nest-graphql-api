import { Resolver, Query } from '@nestjs/graphql';
import { ProgramService } from './program.service';
import { Program } from './entities/program.entity';

@Resolver(() => Program)
export class ProgramResolver {
  constructor(private readonly programService: ProgramService) {}

  @Query(() => [Program], { name: 'program' })
  findAll(): Promise<Program[]> {
    return this.programService.findAll();
  }
}
