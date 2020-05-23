import Orders from './orders';
import Products from './products';
import Http from './http';

export {
  OrderParams,
  Order,
  OrderResult
} from './types';

interface ClientArgs {
  apiUrl: string;
  authToken: string;
}

export { Http };

export default class Client {
  public orders: Orders;
  public products: Products;

  constructor({ apiUrl, authToken }: ClientArgs) {
    this.orders = new Orders(apiUrl, authToken);
    this.products = new Products(apiUrl, authToken);
  }
}
