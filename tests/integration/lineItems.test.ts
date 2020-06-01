import { expect } from 'chai';
import Client from '../../src/index';
import { OrderParams, OrderResult, LineItemParams } from '../../src/types';
import  './testHelper'

let client: Client;

describe('LineItems', () => {
  before(() => {
    client = new Client({
      apiUrl: process.env.API_URL || '',
      authToken: process.env.AUTH_TOKEN || ''
    });
  });

  describe('#create', () => {
    it('success', async () => {
      const orderParams: OrderParams = {
        order: { email: 'mail@example.mw'}
      };
      const itemParams: LineItemParams = {
        line_item: { variant_id: 1, quantity: 1 }
      };

      const orderResponse: OrderResult = await client.orders.create(orderParams);
      const res = await client.lineItems.create(orderResponse.number, itemParams);
      expect(res).to.be.a('object');
    });
  });

  describe('#update', () => {
    it('success', async () => {
      const orderParams: OrderParams = {
        order: {
          email: 'mail@example.mw',
          line_items_attributes: {
            0: { variant_id: 1, quantity: 1 }
          }
        }
      };
      const itemParams: LineItemParams = {
        line_item: { variant_id: 1, quantity: 3 }
      };

      const orderResponse: OrderResult = await client.orders.create(orderParams);

      const itemId: any = orderResponse.line_items[0].id;
      const res = await client.lineItems.update(orderResponse.number, itemId.toString(), itemParams);
      expect(res).to.be.a('object');

    });
  });

  describe('#remove', () => {
    it('success', async () => {
      const orderParams: OrderParams = {
        order: {
          email: 'mail@example.mw',
          line_items_attributes: {
            0: { variant_id: 1, quantity: 1 }
          }
        }
      };

      const orderResponse: OrderResult = await client.orders.create(orderParams);

      const itemId: any = orderResponse.line_items[0].id;
      await client.lineItems.remove(orderResponse.number, itemId.toString());

    });
  });
});
