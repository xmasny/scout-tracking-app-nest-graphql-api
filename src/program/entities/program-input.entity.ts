import { Field, InputType } from '@nestjs/graphql';
import JSON from 'graphql-type-json';
import { Stupen } from '../stupen/stupen.entity';
import { ExpertskeOdborky } from '../expertske-odborky/expertske-odborky.entity';

@InputType()
export class ProgramInputEntity {
  @Field()
  vekova_kat: number;

  @Field()
  program_kat: number;

  @Field()
  name: string;

  @Field()
  photo: string;

  @Field({ nullable: true })
  stupen?: Stupen;

  @Field({ nullable: true })
  expertske_odborky?: ExpertskeOdborky;

  @Field(() => JSON, { nullable: true })
  info?: any;
}
