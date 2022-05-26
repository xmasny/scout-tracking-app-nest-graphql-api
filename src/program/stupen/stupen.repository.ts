import { EntityRepository, Repository } from 'typeorm';
import { Stupen } from './stupen.entity';

@EntityRepository(Stupen)
export class StupenRepository extends Repository<Stupen> {}
