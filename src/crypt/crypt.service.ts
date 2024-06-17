import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptService {
  async getHash(value: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(value, saltOrRounds);
    return hash;
  }

  async match(source, target): Promise<boolean> {
    return await bcrypt.compare(source, target);
  }
}
