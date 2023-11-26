import { BaseAPI } from '../core/BaseApi';
import { ClientConfig } from '../types';

export class PaymentGateWay extends BaseAPI {
  constructor(config: ClientConfig) {
    super(config);
  }

  new() {
    console.log('new request');
  }
}
