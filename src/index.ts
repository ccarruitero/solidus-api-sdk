import Orders from './orders';
import Products from './products';

export {
  IOrderParams,
  IOrder,
  IOrderResult
} from './types';

interface IClient {
  apiUrl: string,
  authToken: string
}

export default class Client {
  public orders: Orders;
  public products: Products;

  constructor({ apiUrl, authToken }: IClient) {
    this.orders = new Orders(apiUrl, authToken);
    this.products = new Products(apiUrl, authToken);
  }
}
