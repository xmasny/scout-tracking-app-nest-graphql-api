import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Program } from '../../entities/program.entity';
import JSON from 'graphql-type-json';

@ObjectType()
@Entity('ulohy')
export class Uloha {
  @Field(() => Int)
  @PrimaryColumn()
  uloha_id: number;

  @Field(() => Int)
  @PrimaryColumn()
  program_id: number;

  @Field(() => Int)
  @Column()
  cislo_ulohy: number;

  @Field()
  @Column()
  text_ulohy: string;

  @ManyToOne(() => Program, (program) => program.ulohy)
  @JoinColumn({ name: 'program_id' })
  program: Program;

  @Field(() => Int, { nullable: true })
  @Column()
  potrebny_pocet_poduloh?: number;

  @Field(() => JSON, { nullable: true })
  @Column({ type: 'json' })
  podulohy?: string;
}
