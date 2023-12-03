import { ApiError, HttpError, ValidationError } from './../core/Error';
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

interface PaymentGateWayNew {
  code: number;
  message: string;
  authority: string;
  fee_type: string;
  fee: number;
}

interface PaymentGateWayVerifyArgs {
  merchant_id: string;
  amount: number;
  authority: string;
}

interface PaymentGateWayVerify {
  code: number;
  ref_id: number;
  card_pan: string;
  card_hash: string;
  fee_type: string;
  fee: number;
}

export interface PaymentGateWay {
  New: BaseResponse<PaymentGateWayNew>;
  Verify: BaseResponse<PaymentGateWayVerify>;
}

export interface PaymentGateWayArgs {
  New: PaymentGateWayNewArgs;
  Verify: PaymentGateWayVerifyArgs;
}

export interface BaseResponse<T> {
  data: T;
  errors: ResponseError;
}

export interface ResponseError {
  code: number;
  message: string;
  validations?: object[];
}

export type ZarinpalError = ApiError | HttpError | ValidationError;
