import { Injectable } from '@nestjs/common';
import type { ConfigService } from '@nestjs/config';

import type { StellaConfig } from '@/configs';

@Injectable()
export class CrawlWorkerService {
  constructor(private readonly configService: ConfigService<StellaConfig>) {}

  async doCrawlJob() {}

  wait(timeout: number) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  }
}
