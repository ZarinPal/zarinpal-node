import 'module-alias/register';

import { ClientConfig } from '../types';

export abstract class BaseAPI {
  constructor(private config: ClientConfig) {
    console.log('BaseAPI');
  }
}
