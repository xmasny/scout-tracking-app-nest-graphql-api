import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('splneny_program')
@ObjectType()
export class SplnenyProgram {
  @Field(() => Int)
  @PrimaryColumn()
  splneny_program_id: number;

  @Field(() => Int)
  @Column()
  user_id: number;

  @Field(() => Int)
  @Column()
  program_id: number;
}
