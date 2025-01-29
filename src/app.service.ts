import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPublicInfo() {
    return {
      email: 'victormayowa163@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/victormayowa/hng12-public-api',
    };
  }
}
