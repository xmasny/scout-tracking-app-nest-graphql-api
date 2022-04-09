import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import JSON from 'graphql-type-json';
import { Uloha } from './uloha.entity';
import { ProgramKat } from './program-kat.entity';
import { VekKat } from '../vek-kat/vek-kat.entity';
import { Stupen } from './stupen.entity';
import { ExpertskeOdborky } from '../expertske-odborky/expertske-odborky.entity';

@Entity('program')
@ObjectType()
export class Program {
  @Field(() => Int)
  @PrimaryColumn()
  program_id: number;

  @Field(() => VekKat)
  @ManyToOne(() => VekKat, (vekKat) => vekKat.id)
  @JoinColumn({ name: 'vekova_kat' })
  vekova_kat: VekKat;

  @Field(() => ProgramKat)
  @ManyToOne(() => ProgramKat, (progKat) => progKat.id)
  @JoinColumn({ name: 'program_kat' })
  program_kat: ProgramKat;

  @Field(() => Stupen, { nullable: true })
  @ManyToOne(() => Stupen, (stupen) => stupen.id)
  @JoinColumn({ name: 'stupen' })
  stupen?: Stupen;

  @Field(() => ExpertskeOdborky, { nullable: true })
  @ManyToOne(() => ExpertskeOdborky, (expertskeOdborky) => expertskeOdborky.id)
  @JoinColumn({ name: 'expertske_odborky' })
  expertske_odborky?: ExpertskeOdborky;

  @Field()
  @Column()
  program_name: string;

  @Field()
  @Column()
  program_photo: string;

  @Field(() => JSON, { nullable: true })
  @Column({ type: 'json' })
  program_info?: any;

  @Field(() => [Uloha])
  @OneToMany(() => Uloha, (ulohy) => ulohy.program)
  ulohy: [Uloha];
}
