import { EntityRepository, Repository } from 'typeorm';
import { ProgramKat } from './program-kat.entity';

@EntityRepository(ProgramKat)
export class ProgramKatRepository extends Repository<ProgramKat> {}
