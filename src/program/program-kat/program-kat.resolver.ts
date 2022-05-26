import { Resolver, Query } from '@nestjs/graphql';
import { ProgramKatService } from './program-kat.service';
import { ProgramKat } from './program-kat.entity';

@Resolver(() => ProgramKat)
export class ProgramKatResolver {
  constructor(private readonly programKatService: ProgramKatService) {}

  @Query(() => [ProgramKat], { name: 'programKat' })
  getProgramKat(): Promise<ProgramKat[]> {
    return this.programKatService.getProgramKat();
  }
}
