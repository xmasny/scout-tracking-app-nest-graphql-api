import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Program } from './entities/program.entity';
import { ProgramRepository } from './program.repository';
import { NewOdborka } from 'types/types';
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
        'program_kat',
        'vekova_kat',
        'ulohy',
        'stupen',
        'expertske_odborky',
      ],
      where: { program_kat: programId, vekova_kat: vekovaKatId },
      order: {
        name: 'ASC',
      },
    });

    return program;
  }

  async addNewOdborka(
    programKat: number,
    vekovaKat: number,
    name: string,
    photo: string,
    stupen?: number,
    expertskeOdborky?: number,
  ): Promise<NewOdborka> {
    if (stupen === 0) stupen = null;
    if (expertskeOdborky === 0) expertskeOdborky = null;

    const queryData = await this.programRepository
      .createQueryBuilder()
      .insert()
      .into(Program)
      .values({
        program_kat: {
          id: programKat,
        },
        vekova_kat: {
          id: vekovaKat,
        },
        name: name,
        photo: photo,
        stupen: {
          id: stupen,
        },
        expertske_odborky: {
          id: expertskeOdborky,
        },
      })
      .orIgnore('')
      .execute();

    const newOdborka = {
      id: parseInt(queryData.raw.insertId),
      program_kat: {
        id: programKat,
      },
      vekova_kat: {
        id: vekovaKat,
      },
      name: name,
      photo: photo,
      stupen: {
        id: stupen,
      },
      expertske_odborky: {
        id: expertskeOdborky,
      },
    };

    return newOdborka;
  }
}
