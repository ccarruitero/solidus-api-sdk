import { Orders } from './orders';

interface IClient {
  apiUrl: string,
  authToken: string
}

export default class Client {
  public orders: Orders;

  constructor({ apiUrl, authToken }: IClient) {
    this.orders = new Orders(apiUrl, authToken);
  }
}
