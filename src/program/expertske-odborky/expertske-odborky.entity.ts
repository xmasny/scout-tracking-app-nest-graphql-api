import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Program } from '../entities/program.entity';

@Entity('expertske_odborky')
@ObjectType()
export class ExpertskeOdborky {
  @Field(() => Int)
  @OneToMany(() => Program, (program) => program.program_kat)
  @PrimaryColumn({ name: 'expertske_odborky_id' })
  id: number;

  @Field()
  @Column({ name: 'expertske_odborky_name' })
  name: string;

  @Field()
  @Column({ name: 'expertske_odborky_foto' })
  foto: string;
}
