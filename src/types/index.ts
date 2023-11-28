export interface ClientConfig {
  // FIXME: fix this
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: any;
  type?: 'rest' | 'graphql';
}

interface MetaData {
  mobile?: string;
  email?: string;
  order_id?: string;
}

export interface PaymentGateWayNewArgs {
  merchant_id: string;
  amount: number;
  description: string;
  callback_url: string;
  metadata?: MetaData;
  currency?: 'IRR' | 'IRT';
}

interface PaymentGateWayNewData {
  code: number;
  message: string;
  authority: string;
  fee_type: string;
  fee: number;
}

export interface PaymentGateWayNew {
  data: PaymentGateWayNewData;
}

export interface PaymentGateWay {
  New: PaymentGateWayNew;
}

export interface PaymentGateWayArgs {
  New: PaymentGateWayNewArgs;
}
