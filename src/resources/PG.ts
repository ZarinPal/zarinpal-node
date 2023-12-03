import { ZarinpalError } from '../types/index';
import { BaseAPI } from '../core/BaseApi';
import { ClientConfig } from '../types';
import { PaymentGateWay, PaymentGateWayArgs } from '../types';

export class PG extends BaseAPI {
  constructor(config: ClientConfig) {
    super(config);
  }

  async newPayment(body: PaymentGateWayArgs['New']): Promise<string | ZarinpalError> {
    try {
      const response: PaymentGateWay['New'] = await this.post(
        'https://api.zarinpal.com/pg/v4/payment/request.json',
        body,
      );

      return `https://www.zarinpal.com/pg/StartPay/${response.data.authority}`;
    } catch (e: unknown) {
      console.log('error in new pg');
      console.log(e);

      return e as ZarinpalError;
    }
  }

  async verify(
    body: PaymentGateWayArgs['Verify'],
  ): Promise<PaymentGateWay['Verify'] | ZarinpalError> {
    try {
      const response: PaymentGateWay['Verify'] = await this.post(
        'https://api.zarinpal.com/pg/v4/payment/verify.json',
        body,
      );
      console.log(response);

      return response;
    } catch (e: unknown) {
      console.log('error in verify pg');
      console.log(e);

      return e as ZarinpalError;
    }
  }
}
