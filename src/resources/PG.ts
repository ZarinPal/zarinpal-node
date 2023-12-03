// import { ApiError } from './../core/Error';
import { BaseAPI } from '../core/BaseApi';
import { ClientConfig } from '../types';
import { PaymentGateWay, PaymentGateWayArgs } from '../types';

export class PG extends BaseAPI {
  public authority!: string;
  constructor(config: ClientConfig) {
    super(config);
  }

  async new(body: PaymentGateWayArgs['New']) {
    console.log('***** new request *****');
    console.log(body);
    try {
      const response: PaymentGateWay['New'] = await this.post(
        'https://api.zarinpal.com/pg/v4/payment/request.json',
        body,
      );
      console.log(response);
      this.authority = response.data.authority;
    } catch (e: unknown) {
      console.log('error in new pg');
      console.log(e);

      return e;
    }
  }

  async start() {
    console.log('***** start request *****');
    try {
      const response = await this.get(`https://www.zarinpal.com/pg/StartPay/${this.authority}`);
      console.log(response);
    } catch (e) {
      console.log('error in new pg');
      console.log(e);

      return e;
    }
  }
}
