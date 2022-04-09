import { Module } from '@nestjs/common';
import { ExpertskeOdborkyService } from './expertske-odborky.service';
import { ExpertskeOdborkyResolver } from './expertske-odborky.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpertskeOdborkyRepository } from './expertske-odborky.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ExpertskeOdborkyRepository])],
  providers: [ExpertskeOdborkyResolver, ExpertskeOdborkyService],
})
export class ExpertskeOdborkyModule {}
