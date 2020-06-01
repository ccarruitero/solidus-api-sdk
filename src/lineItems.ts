import Http from './http';
import { LineItemParams } from './types';

export default class LineItems extends Http {
  private baseUrl(orderNumber: string): string {
    return `${this.apiUrl}/api/orders/${orderNumber}/line_items`;
  }

  public async create<T>(orderNumber: string, itemParams: LineItemParams): Promise<T> {
    const url = this.baseUrl(orderNumber);
    return await this.request({
      url,
      method: 'POST',
      body: JSON.stringify(itemParams)
    });
  }

  public async update<T>(orderNumber: string, itemId: string, itemParams: LineItemParams): Promise<T> {
    const base = this.baseUrl(orderNumber);
    const url = `${base}/${itemId}`;
    return await this.request({ url, method: 'PUT', body: JSON.stringify(itemParams) });
  }

  public async remove<T>(orderNumber: string, itemId: string): Promise<T> {
    const base = this.baseUrl(orderNumber);
    const url = `${base}/${itemId}`;
    return await this.request({ url, method: 'DELETE' });
  }
}
