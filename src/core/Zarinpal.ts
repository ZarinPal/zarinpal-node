import { PaymentGateWay } from '../resources';
import { ClientConfig } from '../types';

export class Zarinpal {
  pg: PaymentGateWay;

  constructor(config: ClientConfig) {
    this.pg = new PaymentGateWay(config);
  }
}
