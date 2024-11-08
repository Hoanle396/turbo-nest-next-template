import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { load } from '@/configs';
import { OrmModule } from '@/orm.module';

import { AdminSeedModule } from './admin/admin_seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load,
    }),
    OrmModule,
    AdminSeedModule,
  ],
})
export class SeedModule {}
