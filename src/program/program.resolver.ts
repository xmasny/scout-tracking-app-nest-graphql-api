import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { ProgramService } from './program.service';
import { Program } from './entities/program.entity';
import { NewOdborka } from 'types/types';

@Resolver(() => Program)
export class ProgramResolver {
  constructor(private readonly programService: ProgramService) {}

  @Query(() => [Program], { name: 'program' })
  async getAllProgram(
    @Args('program_id', { type: () => Int }) programId: number,
    @Args('vekova_kat_id', { type: () => Int }) vekovaKatId: number,
  ): Promise<Program[]> {
    return this.programService.getAllProgram(programId, vekovaKatId);
  }

  @Mutation(() => Program, { name: 'addNewOdborka' })
  async addNewOdborka(
    @Args('program_kat', { type: () => Int }) programKat: number,
    @Args('vekova_kat', { type: () => Int }) vekovaKat: number,
    @Args('name') name: string,
    @Args('photo') photo: string,
    @Args('stupen', { type: () => Int }) stupen: number,
    @Args('expertske_odborky', { type: () => Int })
    expertskeOdborky: number,
  ): Promise<NewOdborka> {
    return this.programService.addNewOdborka(
      programKat,
      vekovaKat,
      name,
      photo,
      stupen,
      expertskeOdborky,
    );
  }
}
