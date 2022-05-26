import { Resolver, Query } from '@nestjs/graphql';
import { StupenService } from './stupen.service';
import { Stupen } from './stupen.entity';

@Resolver(() => Stupen)
export class StupenResolver {
  constructor(private readonly stupenService: StupenService) {}

  @Query(() => [Stupen], { name: 'stupen' })
  getStupen(): Promise<Stupen[]> {
    return this.stupenService.getStupen();
  }
}
