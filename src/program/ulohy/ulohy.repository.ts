import { EntityRepository, Repository } from 'typeorm';
import { Uloha } from './entities/ulohy.entity';

@EntityRepository(Uloha)
export class UlohyRepository extends Repository<Uloha> {}
