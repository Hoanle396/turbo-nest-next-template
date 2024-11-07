import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ManagerService } from './manager.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [ManagerService],
  exports: [ManagerService],
})
export class WorkerModule {}
