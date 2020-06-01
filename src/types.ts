export interface OrderParams {
  order: Order;
}

export interface Order {
  coupon_code?: string;
  email?: string;
  special_instructions?: string;
  use_billing?: boolean;
  bill_address_attributes?: object;
  ship_address_attributes?: object;
  payments_attributes?: object;
  shipments_attributes?: object;
  line_items_attributes?: object;
}

export interface OrderResult {
  additional_tax_total?: string;
  adjustment_total?: string;
  adjustments?: object[];
  bill_address?: object;
  canceler_id?: number;
  channel?: string;
  checkout_steps?: string[];
  completed_at?: string;
  created_at?: string;
  credit_card?: object[];
  currency?: string;
  display_additional_tax?: string;
  display_included_tax?: string;
  display_item_total?: string;
  display_ship_total?: string;
  display_tax_total?: string;
  display_total?: string;
  email?: string;
  id?: number;
  included_tax_total?: string;
  item_total?: string;
  line_items?: object[];
  number?: string;
  payment_method?: object[];
  payment_state?: string;
  payment_total?: string;
  payments?: object[];
  permissions?: object;
  ship_address?: object;
  ship_total?: string;
  shipment_state?: string;
  shipments?: object[];
  special_instructions?: string;
  state?: string;
  tax_total?: string;
  token?: string;
  total?: string;
  total_quantity?: number;
  user_id?: number;
}

export interface OrderListResult {
  orders: OrderResult[]
}

export interface LineItemParams {
  quantity: number;
  options: object;
  id: number;
  variant_id: number;
}
