import { Resolver, Query } from '@nestjs/graphql';
import { VekKatService } from './vek-kat.service';
import { VekKat } from './vek-kat.entity';

@Resolver(() => VekKat)
export class VekKatResolver {
  constructor(private readonly vekKatService: VekKatService) {}

  @Query(() => [VekKat], { name: 'vekovaKat' })
  getVekKatOdborky(): Promise<VekKat[]> {
    return this.vekKatService.getVekKatOdborky();
  }
}
