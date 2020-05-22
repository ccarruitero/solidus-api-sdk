import Http from './http';
import { IOrderParams } from './types';

export default class Orders extends Http {
  private baseUrl: string;

  constructor(apiUrl: string, authToken: string) {
    super(apiUrl, authToken);
    this.baseUrl = `${this.apiUrl}/api/orders`;
  }

  public async list<T>(searchParams: string = ''): Promise<T> {
    const url = `${this.baseUrl}${searchParams}`;
    return await this.request({ url });
  }

  public async mine<T>(searchParams: string = ''): Promise<T> {
    const url = `${this.baseUrl}/mine${searchParams}`;
    return await this.request({ url });
  }

  public async get<T>(orderId: string): Promise<T> {
    const url = `${this.baseUrl}/${orderId}`;
    return await this.request({ url });
  }

  public async create<T>(orderParams: IOrderParams): Promise<T> {
    const url = this.baseUrl;
    return await this.request({ url, method: 'POST', body: JSON.stringify(orderParams) });
  }

  public async update<T>(orderId: string, orderParams: IOrderParams): Promise<T> {
    const url = `${this.baseUrl}/${orderId}`;
    return await this.request({ url, method: 'PUT', body: JSON.stringify(orderParams) });
  }

  public async current<T>(): Promise<T> {
    const url = `${this.baseUrl}/current`;
    return await this.request({ url });
  }

  public async empty<T>(orderId: string): Promise<T> {
    const url = `${this.baseUrl}/${orderId}/empty`;
    return await this.request({ url, method: 'PUT' });
  }
}
