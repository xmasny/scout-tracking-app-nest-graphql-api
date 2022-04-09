import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpertskeOdborkyRepository } from './expertske-odborky.repository';
import { ExpertskeOdborky } from './expertske-odborky.entity';

@Injectable()
export class ExpertskeOdborkyService {
  constructor(
    @InjectRepository(ExpertskeOdborkyRepository)
    private expertskeOdborkyRepository: ExpertskeOdborkyRepository,
  ) {}

  async getExpOdb(): Promise<ExpertskeOdborky[]> {
    const expOdb: ExpertskeOdborky[] =
      await this.expertskeOdborkyRepository.find();
    return expOdb;
  }
}
