import { Injectable } from '@nestjs/common';
import { ProgramKat } from './program-kat.entity';
import { ProgramKatRepository } from './program-kat.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProgramKatService {
  constructor(
    @InjectRepository(ProgramKatRepository)
    private programKatRepository: ProgramKatRepository,
  ) {}

  async getProgramKat(): Promise<ProgramKat[]> {
    const programKat: ProgramKat[] = await this.programKatRepository.find({
      order: {
        id: 'ASC',
      },
    });
    return programKat;
  }
}
