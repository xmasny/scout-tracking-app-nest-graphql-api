import { Resolver, Query } from '@nestjs/graphql';
import { ExpertskeOdborkyService } from './expertske-odborky.service';
import { ExpertskeOdborky } from './expertske-odborky.entity';

@Resolver(() => ExpertskeOdborky)
export class ExpertskeOdborkyResolver {
  constructor(
    private readonly expertskeOdborkyService: ExpertskeOdborkyService,
  ) {}

  @Query(() => [ExpertskeOdborky], { name: 'expertskeOdborky' })
  getExpOdb(): Promise<ExpertskeOdborky[]> {
    return this.expertskeOdborkyService.getExpOdb();
  }
}
