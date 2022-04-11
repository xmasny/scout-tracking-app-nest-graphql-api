import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VekovaKatRepository } from './vek-kat.repository';
import { VekKat } from './vek-kat.entity';
import { VekKatEnum } from './vek-kat.enum';

const { VLCATA, SKAUTI, ROVERI } = VekKatEnum;

@Injectable()
export class VekKatService {
  constructor(
    @InjectRepository(VekovaKatRepository)
    private vekovaKatRepository: VekovaKatRepository,
  ) {}

  async getVekKatOdborky(): Promise<VekKat[]> {
    const vekKat: VekKat[] = await this.vekovaKatRepository.find({
      where: [{ id: VLCATA }, { id: SKAUTI }, { id: ROVERI }],
      order: {
        id: 'ASC',
      },
    });
    return vekKat;
  }
}
