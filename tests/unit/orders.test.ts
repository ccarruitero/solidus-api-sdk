import { expect } from 'chai';
import Orders from '../../src/orders';
import 'mocha';

describe('Orders', () => {
  it('doesnt broken', () => {
    const orders = new Orders('http://localhost', 'abc123');
    expect(orders);
  });
});
