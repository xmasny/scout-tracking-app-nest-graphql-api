import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Program } from '../entities/program.entity';

@Entity('stupen')
@ObjectType()
export class Stupen {
  @Field(() => Int)
  @OneToMany(() => Program, (program) => program.program_kat)
  @PrimaryColumn({ name: 'stupen_id' })
  id: number;

  @Field()
  @Column({ name: 'stupen_name' })
  name: string;
}
