import { Module } from '@nestjs/common';
import { StupenService } from './stupen.service';
import { StupenResolver } from './stupen.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StupenRepository } from './stupen.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StupenRepository])],
  providers: [StupenResolver, StupenService],
})
export class StupenModule {}
