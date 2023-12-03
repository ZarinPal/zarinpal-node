import { ValidationError, ApiError } from './Error';
import axios from 'axios';
import { ClientConfig, ResponseError } from '../types';

export abstract class BaseAPI {
  constructor(private config: ClientConfig) {
    console.log('BaseAPI');
  }

  protected async post(url: string, body: unknown) {
    try {
      const { data: response } = await axios.post(url, body);
      console.log('hereeee');
      console.log(response);
      console.log('@@@@@');

      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log('not axios error');
      console.log(e.response.data);
      if (e.response.data.errors) {
        this.errorHandler(e.response.data.errors);
      }
      // TODO: if does not contain errors
    }
  }

  protected async get(url: string) {
    try {
      const { data: response } = await axios.get(url);
      console.log('heeeeerree');
      console.log(response);
      console.log('@@@@@');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log('not axios error');
      console.log(e);
      // console.log(e.response.data);
    }
  }

  private errorHandler(error: ResponseError) {
    if (error.code === -9) {
      throw new ValidationError(error.code, error.message);
    }
    if (error.code === -38) {
      throw new ApiError(error.code, error.message);
    }
  }
}
