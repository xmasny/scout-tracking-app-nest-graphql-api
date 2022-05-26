import { Injectable } from '@nestjs/common';
import { Stupen } from './stupen.entity';
import { StupenRepository } from './stupen.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StupenService {
  constructor(
    @InjectRepository(StupenRepository)
    private stupenRepository: StupenRepository,
  ) {}

  async getStupen(): Promise<Stupen[]> {
    const stupen: Stupen[] = await this.stupenRepository.find();
    return stupen;
  }
}
