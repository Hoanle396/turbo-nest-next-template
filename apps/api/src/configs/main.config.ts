import { registerAs } from '@nestjs/config';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MainConfig {
  @IsNotEmpty()
  @IsNumber()
  port: number;

  @IsNotEmpty()
  @IsNumber()
  workerPort: number;

  @IsNotEmpty()
  @IsBoolean()
  isProduction: boolean;

  @IsNotEmpty()
  @IsString()
  apiPrefix: string;

  @IsNotEmpty()
  @IsString()
  appUrl: string;

  constructor() {
    this.port = Number(process.env.PORT) || 3001;
    this.workerPort = Number(process.env.WORKER_PORT) || 3003;
    this.isProduction = process.env.PRODUCTION === 'true';
    this.apiPrefix = 'api/v1';
    this.appUrl = process.env.APP_URL || 'http://localhost:3000';
  }
}

export default registerAs<MainConfig>('main', () => new MainConfig());
