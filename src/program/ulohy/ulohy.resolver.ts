import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { UlohyService } from './ulohy.service';
import { Uloha } from './entities/ulohy.entity';
import { UlohaInputType } from './entities/ulohy-input-type.entity';

@Resolver(() => Uloha)
export class UlohyResolver {
  constructor(private readonly ulohyService: UlohyService) {}

  @Mutation(() => [Uloha], { name: 'addNewUlohyOdborka' })
  async addNewUlohyOdborka(
    @Args('ulohy', { type: () => [UlohaInputType] })
    ulohy: UlohaInputType[],
  ): Promise<UlohaInputType[]> {
    return this.ulohyService.addNewUlohyOdborka(ulohy);
  }
}
