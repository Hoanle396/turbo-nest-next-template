import { Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { CrawlWorkerService } from './crawl.service';

@Injectable()
export class ManagerService {
  constructor(private readonly configService?: ConfigService) {
    this.init();
  }

  async init() {
    while (true) {
      await new CrawlWorkerService(this.configService).doCrawlJob();
      await this.wait(10000); // 10 seconds
    }
  }

  wait(timeout: number) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  }
}
