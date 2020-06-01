import Orders from './orders';
import Products from './products';
import LineItems from './lineItems';
import Http from './http';

export {
  OrderParams,
  Order,
  OrderResult,
  LineItem,
  LineItemParams
} from './types';

interface ClientArgs {
  apiUrl: string;
  authToken: string;
}

export { Http };

export default class Client {
  public orders: Orders;
  public products: Products;
  public lineItems: LineItems;

  constructor({ apiUrl, authToken }: ClientArgs) {
    this.orders = new Orders(apiUrl, authToken);
    this.products = new Products(apiUrl, authToken);
    this.lineItems = new LineItems(apiUrl, authToken);
  }
}
