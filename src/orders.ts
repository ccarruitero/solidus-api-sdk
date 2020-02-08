import Http from './http';

interface IOrderParams {
  coupon_code?: string,
  email?: string,
  special_instructions?: string,
  use_billing?: boolean,
  bill_address_attributes?: object,
  ship_address_attributes?: object,
  payments_attributes?: object,
  shipments_attributes?: object,
  line_items_attributes?: object
}

export class Orders extends Http {
  public async list(searchParams: string) {
    const url = `${this.apiUrl}/api/orders?${searchParams}`;
    return await this.request({ url });
  }

  public async get(orderId: string) {
    const url = `${this.apiUrl}/api/orders/${orderId}`;
    return await this.request({ url });
  }

  public async create(orderParams: IOrderParams) {
    const url = `${this.apiUrl}/api/orders`;
    return await this.request({ url, method: 'POST', body: JSON.stringify(orderParams) });
  }

  public async updateOrder(orderParams: IOrderParams) {
    const url = `${this.apiUrl}/api/orders`;
    return await this.request({ url, method: 'PUT', body: JSON.stringify(orderParams) });
  }
}
