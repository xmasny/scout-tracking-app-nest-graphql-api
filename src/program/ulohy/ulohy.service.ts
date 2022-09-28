import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UlohaInputType } from './entities/ulohy-input-type.entity';
import { Uloha } from './entities/ulohy.entity';
import { UlohyRepository } from './ulohy.repository';

@Injectable()
export class UlohyService {
  constructor(
    @InjectRepository(UlohyRepository)
    private ulohyRepository: UlohyRepository,
  ) {}

  async addNewUlohyOdborka(ulohy: UlohaInputType[]): Promise<UlohaInputType[]> {
    this.ulohyRepository
      .createQueryBuilder()
      .insert()
      .into(Uloha)
      .values(ulohy)
      .execute();
    return ulohy;
  }
}
