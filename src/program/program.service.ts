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

  async findAll(): Promise<Program[]> {
    const program = await this.programRepository.find({
      relations: [
        'program_kat',
        'vekova_kat',
        'ulohy',
        'stupen',
        'expertske_odborky',
      ],
    });

    console.log(program);
    return program;
  }
}
