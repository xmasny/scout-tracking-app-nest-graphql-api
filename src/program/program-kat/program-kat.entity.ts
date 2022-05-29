import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Program } from '../entities/program.entity';

@Entity('program_kat')
@ObjectType()
export class ProgramKat {
  @Field(() => Int)
  @OneToMany(() => Program, (program) => program.program_kat)
  @PrimaryColumn({ name: 'program_kat_id' })
  id: number;

  @Field()
  @Column({ name: 'program_kat_name' })
  name: string;
}
