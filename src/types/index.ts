import { HeadersInit } from 'node-fetch';
export interface ClientConfig {
  headers?: HeadersInit;
  type?: 'rest' | 'graphql';
}

interface MetaData {
  mobile?: string;
  email?: string;
  order_id?: string;
}

export interface PGNewArgs {
  merchant_id: string;
  amount: number;
  description: string;
  callback_url: string;
  metadata?: MetaData;
  currency?: 'IRR' | 'IRT';
}

interface PGNewData {
  code: number;
  message: string;
  authority: string;
  fee_type: string;
  fee: number;
}

export interface PGNew {
  data: PGNewData;
}

export interface PG {
  new: PGNew;
}

export interface ArgsPG {
  new: PGNewArgs;
}
