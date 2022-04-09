import { Column, PrimaryColumn, Entity, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Program } from '../entities/program.entity';

@Entity('vekova_kat')
@ObjectType()
export class VekKat {
  @Field(() => Int)
  @OneToMany(() => Program, (program) => program.vekova_kat)
  @PrimaryColumn({ name: 'vekova_kat_id' })
  id: number;

  @Field({ nullable: true })
  @Column({ name: 'vekova_kat_name' })
  name: string;
}
