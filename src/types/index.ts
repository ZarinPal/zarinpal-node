import { HeadersInit } from 'node-fetch';
export interface ClientConfig {
  headers?: HeadersInit;
  type?: 'rest' | 'graphql';
}
