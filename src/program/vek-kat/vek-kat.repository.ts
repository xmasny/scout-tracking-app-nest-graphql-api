import { EntityRepository, Repository } from 'typeorm';
import { VekKat } from './vek-kat.entity';

@EntityRepository(VekKat)
export class VekovaKatRepository extends Repository<VekKat> {}
