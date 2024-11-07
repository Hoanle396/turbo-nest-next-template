import { Injectable } from '@nestjs/common';

import { BasicAuthEnum, SocialAuthEnum } from '@/shared/enums';

import { BasicAuthService } from './basic_auth.service';
import { GoogleAuthService } from './google_auth.service';

@Injectable()
export class AuthFactory {
  private socialAuthServices: { [key: string]: any };
  private basicAuthServices: { [key: string]: any };

  constructor(googleAuthService: GoogleAuthService, basicAuthService: BasicAuthService) {
    this.socialAuthServices = {
      [SocialAuthEnum.GOOGLE]: googleAuthService,
    };

    this.basicAuthServices = {
      [BasicAuthEnum.ADMIN]: basicAuthService,
      [BasicAuthEnum.USER]: basicAuthService,
    };
  }

  getSocialAuthService(provider: SocialAuthEnum) {
    const authService = this.socialAuthServices[provider];
    if (!authService) {
      throw new Error(`Unsupported auth provider: ${provider}`);
    }
    return authService;
  }

  getBasicAuthService(type: BasicAuthEnum): any {
    const authService = this.basicAuthServices[type];
    if (!authService) {
      throw new Error(`Unsupported auth type: ${type}`);
    }
    return authService;
  }
}
