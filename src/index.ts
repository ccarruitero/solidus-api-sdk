import Orders from './orders';
import Products from './products';
import Http from './http';

export {
  IOrderParams,
  IOrder,
  IOrderResult
} from './types';

interface IClient {
  apiUrl: string,
  authToken: string
}

export { Http };

export default class Client {
  public orders: Orders;
  public products: Products;

  constructor({ apiUrl, authToken }: IClient) {
    this.orders = new Orders(apiUrl, authToken);
    this.products = new Products(apiUrl, authToken);
  }
}
