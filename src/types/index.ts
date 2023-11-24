export interface ClientConfig {
  headers?: { [key: string]: string | boolean | number };
  baseUrl?: string;
  type?: 'rest' | 'graphql';
}
