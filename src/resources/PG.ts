import { BaseAPI } from '../core/BaseApi';
import { ClientConfig } from '../types';
import { PaymentGateWay } from '../types';

export class PG extends BaseAPI {
  constructor(config: ClientConfig) {
    super(config);
  }

  async new(args: PaymentGateWay['New']) {
    console.log('new request');
    console.log(args);
  }
}
