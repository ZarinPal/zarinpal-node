import { PG } from '../resources';
import { ClientConfig } from '../types';

export class Zarinpal {
  pg: PG;

  constructor(config: ClientConfig) {
    this.pg = new PG(config);
  }
}
