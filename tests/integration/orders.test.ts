import { expect } from 'chai';
import Orders from '../../src/orders';
import { OrderParams, OrderListResult } from '../../src/types';
import  './testHelper'

let orders: Orders;

describe('Orders', () => {
  before(() => {
    orders = new Orders(process.env.API_URL || '', process.env.AUTH_TOKEN || '');
  });

  describe('#list', () => {
    it('success', async () => {
      const res = await orders.list();
      expect(res).to.be.a('object');
    });
  });

  describe('#mine', () => {
    it('success', async () => {
      const res: OrderListResult = await orders.mine();
      expect(res).to.be.a('object');
      expect(res?.orders).to.be.a('array');
    });
  });

  describe('#create', () => {
    it('success', async () => {
      const params: OrderParams = {
        order: {
          line_items_attributes: {
            '0': { variant_id: 1, quantity: 1 }
          }
        }
      };
      const res = await orders.create(params);
      expect(res).to.be.a('object');
    }).timeout(1000);
  })
});
