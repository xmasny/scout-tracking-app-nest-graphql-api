import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ProgramService } from './program.service';
import { Program } from './entities/program.entity';

@Resolver(() => Program)
export class ProgramResolver {
  constructor(private readonly programService: ProgramService) {}

  @Query(() => [Program], { name: 'program' })
  getAllProgram(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Program[]> {
    return this.programService.getAllProgram(id);
  }
}
