import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { RedisService } from './redis.service';
@Module({
  imports: [HttpModule],
  providers: [RedisService],
  exports: [RedisService],
})
export class ServicesModule {}
