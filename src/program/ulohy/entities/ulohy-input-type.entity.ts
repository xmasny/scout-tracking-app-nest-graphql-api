import { Field, Int, InputType } from '@nestjs/graphql';
import JSON from 'graphql-type-json';

@InputType('UlohaInputType', { isAbstract: true })
export class UlohaInputType {
  @Field(() => Int)
  program_id: number;

  @Field(() => Int)
  cislo_ulohy: number;

  @Field()
  text_ulohy: string;

  @Field(() => Int, { nullable: true })
  potrebny_pocet_poduloh?: number;

  @Field(() => JSON, { nullable: true })
  podulohy?: string;
}
