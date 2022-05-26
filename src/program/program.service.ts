import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Program } from './entities/program.entity';
import { ProgramRepository } from './program.repository';
@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(ProgramRepository)
    private programRepository: ProgramRepository,
  ) {}

  async getAllProgram(
    programId: number,
    vekovaKatId: number,
  ): Promise<Program[]> {
    const program = await this.programRepository.find({
      relations: [
        'kategoria',
        'vekova_kat',
        'ulohy',
        'stupen',
        'expertske_odborky',
      ],
      where: { kategoria: programId, vekova_kat: vekovaKatId },
      order: {
        name: 'ASC',
      },
    });

    return program;
  }

  // async chooseProgram(): Promise<Program> {
  //   const program = this
  // }
}
