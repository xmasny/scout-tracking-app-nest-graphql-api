import { EntityRepository, Repository } from 'typeorm';
import { ExpertskeOdborky } from './expertske-odborky.entity';

@EntityRepository(ExpertskeOdborky)
export class ExpertskeOdborkyRepository extends Repository<ExpertskeOdborky> {}
