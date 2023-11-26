import fetch from 'node-fetch';

import { ClientConfig } from '../types';

export abstract class BaseAPI {
  constructor(private config: ClientConfig) {
    console.log('BaseAPI');
  }

  protected async post(url: string, body: unknown): Promise<unknown> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: this.config.headers,
      });
      const data = await response.json();

      return data;
    } catch (e) {
      // TODO: handle error
      console.log('error');
      console.log(e);
    }
  }
}
