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
  @PrimaryColumn({ name: 'program_id' })
  id: number;

  @Field(() => VekKat)
  @ManyToOne(() => VekKat, (vekKat) => vekKat.id)
  @JoinColumn({ name: 'vekova_kat' })
  vekova_kat: VekKat;

  @Field(() => ProgramKat)
  @ManyToOne(() => ProgramKat, (progKat) => progKat.id)
  @JoinColumn({ name: 'program_kat' })
  kategoria: ProgramKat;

  @Field()
  @Column({ name: 'program_name' })
  name: string;

  @Field()
  @Column({ name: 'program_photo' })
  photo: string;

  @Field(() => [Uloha])
  @OneToMany(() => Uloha, (ulohy) => ulohy.program)
  ulohy: [Uloha];

  @Field(() => Stupen, { nullable: true })
  @ManyToOne(() => Stupen, (stupen) => stupen.id)
  @JoinColumn({ name: 'stupen' })
  stupen?: Stupen;

  @Field(() => ExpertskeOdborky, { nullable: true })
  @ManyToOne(() => ExpertskeOdborky, (expertskeOdborky) => expertskeOdborky.id)
  @JoinColumn({ name: 'expertske_odborky' })
  expertske_odborky?: ExpertskeOdborky;

  @Field(() => JSON, { nullable: true })
  @Column({ type: 'json', name: 'program_info' })
  info?: any;
}
