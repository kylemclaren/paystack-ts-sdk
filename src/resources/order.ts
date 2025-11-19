// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Order extends APIResource {
  /**
   * Create an order for selected items
   *
   * @example
   * ```ts
   * const order = await client.order.create({
   *   currency: 'NGN',
   *   email: 'test@email.com',
   *   first_name: 'Demo',
   *   items: [
   *     {
   *       amount: 2,
   *       item: 2179824,
   *       quantity: 200000,
   *       type: 'product',
   *     },
   *   ],
   *   last_name: 'User',
   *   phone: '+2348031245678',
   *   shipping: {
   *     city: 'Atlantic',
   *     country: 'Equator',
   *     shipping_fee: 10000,
   *     state: 'Pacific',
   *     street_line: 'Somewhere on Earth',
   *   },
   * });
   * ```
   */
  create(body: OrderCreateParams, options?: RequestOptions): APIPromise<OrderCreateResponse> {
    return this._client.post('/order', { body, ...options });
  }

  /**
   * Fetch the details of a previously created order
   *
   * @example
   * ```ts
   * const order = await client.order.retrieve(1559046);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<OrderRetrieveResponse> {
    return this._client.get(path`/order/${id}`, options);
  }

  /**
   * List the previously created orders
   *
   * @example
   * ```ts
   * const orders = await client.order.list();
   * ```
   */
  list(
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderListResponse> {
    return this._client.get('/order', { query, ...options });
  }

  /**
   * Fetch all orders for a particular product
   *
   * @example
   * ```ts
   * const response = await client.order.fetchProductOrders(
   *   1559046,
   * );
   * ```
   */
  fetchProductOrders(id: number, options?: RequestOptions): APIPromise<OrderFetchProductOrdersResponse> {
    return this._client.get(path`/order/product/${id}`, options);
  }

  /**
   * Validate a pay for me order
   *
   * @example
   * ```ts
   * const response = await client.order.validate(
   *   'ORD_6z0lqwpmxrm7dsp',
   * );
   * ```
   */
  validate(code: string, options?: RequestOptions): APIPromise<OrderValidateResponse> {
    return this._client.get(path`/order/${code}/validate`, options);
  }
}

export interface OrderCreateResponse {
  data: OrderCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace OrderCreateResponse {
  export interface Data {
    id: number;

    amount: number;

    createdAt: string;

    currency: string;

    customer: number;

    discount_amount: number;

    discounts: Array<unknown>;

    domain: string;

    email: string;

    expiration_date: unknown;

    integration: number;

    is_viewed: boolean;

    items: Array<unknown>;

    metadata: unknown;

    order_code: string;

    pay_for_me: boolean;

    pay_for_me_code: string;

    refunded: boolean;

    shipping: Data.Shipping | null;

    shipping_address: unknown;

    shipping_fees: number;

    status: string;

    updatedAt: string;

    shipping_method?: Data.ShippingMethod;
  }

  export namespace Data {
    export interface Shipping {
      id: number;

      city: string;

      country: string;

      createdAt: string;

      customer: number;

      delivery_note: unknown;

      delivery_tracking_link: unknown;

      domain: string;

      fees: number;

      integration: number;

      is_shipped: boolean;

      state: string;

      street_line: string;

      updatedAt: string;
    }

    export interface ShippingMethod {
      currency: string;

      fee: number;

      region: string;
    }
  }
}

export interface OrderRetrieveResponse {
  data: OrderRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace OrderRetrieveResponse {
  export interface Data {
    id: number;

    amount: number;

    createdAt: string;

    currency: string;

    customer: Data.Customer;

    discount_amount: unknown;

    discounts: Array<unknown>;

    domain: string;

    email: string;

    expiration_date: string;

    fully_refunded: boolean;

    integration: number;

    is_gift: boolean;

    is_viewed: boolean;

    items: Array<Data.Item>;

    metadata: unknown;

    order_code: string;

    page: unknown;

    paid_at: string;

    pay_for_me: boolean;

    payer: Data.Payer;

    refunded: boolean;

    refunded_amount: number;

    shipping: unknown;

    shipping_address: unknown;

    shipping_fees: number;

    shipping_method: unknown;

    status: string;

    transaction: number;

    updatedAt: string;
  }

  export namespace Data {
    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string;

      international_format_phone: string;

      last_name: string;

      metadata: unknown;

      phone: string;

      risk_action: string;
    }

    export interface Item {
      amount: number;

      createdAt: string;

      current_total_items_price: number;

      files: string;

      'IFNULL(p1.expires_in, p2.expires_in)': unknown;

      'IFNULL(p1.metadata, p2.metadata)': string;

      item: number;

      name: string;

      order: number;

      order_item_id: number;

      orderId: number;

      product_id: number;

      product_level_type: string;

      product_notification_emails: unknown;

      product_quantity_sold: number;

      product_redirect_url: unknown;

      product_success_message: unknown;

      quantity: number;

      storefront_redirect_url: unknown;

      storefront_success_message: unknown;

      type: string;
    }

    export interface Payer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string;

      international_format_phone: string;

      last_name: string;

      metadata: unknown;

      phone: string;

      risk_action: string;
    }
  }
}

export interface OrderListResponse {
  data: Array<OrderListResponse.Data>;

  message: string;

  meta: OrderListResponse.Meta;

  status: boolean;
}

export namespace OrderListResponse {
  export interface Data {
    id: number;

    amount: number;

    created_at: string;

    currency: string;

    customer: number;

    customer_name: string;

    discount_amount: unknown;

    discounts: unknown;

    domain: string;

    email: string;

    fully_refunded: boolean;

    integration: number;

    is_viewed: boolean;

    items: Array<Data.Item>;

    metadata: string;

    order_code: string;

    page: unknown;

    paid_at: string;

    refunded: boolean;

    refunded_amount: unknown;

    shipping: unknown;

    shipping_address: unknown;

    shipping_fees: number;

    status: string;

    transaction: number;

    updated_at: string;
  }

  export namespace Data {
    export interface Item {
      amount: number;

      createdAt: string;

      current_total_items_price: number;

      files: string;

      'IFNULL(p1.expires_in, p2.expires_in)': unknown;

      'IFNULL(p1.metadata, p2.metadata)': string;

      item: number;

      name: string;

      order: number;

      order_item_id: number;

      orderId: number;

      product_id: number;

      product_level_type: string;

      product_notification_emails: unknown;

      product_quantity_sold: number;

      product_redirect_url: unknown;

      product_success_message: unknown;

      quantity: number;

      storefront_redirect_url: unknown;

      storefront_success_message: unknown;

      type: string;
    }
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: number;

    revenue: unknown;

    skipped: number;

    total: number;
  }
}

export interface OrderFetchProductOrdersResponse {
  data: Array<OrderFetchProductOrdersResponse.Data>;

  message: string;

  meta: OrderFetchProductOrdersResponse.Meta;

  status: boolean;
}

export namespace OrderFetchProductOrdersResponse {
  export interface Data {
    amount: number;

    amount_paid: number;

    created_at: string;

    currency: string;

    customer: number;

    customer_name: string;

    delivery_note: unknown;

    email: string;

    first_name: string;

    is_shipped: boolean;

    is_viewed: number;

    last_name: string;

    order_code: string;

    order_id: number;

    paid_at: string;

    phone: string;

    price: number;

    product_code: string;

    product_id: number;

    product_name: string;

    quantity: number;

    quantity_sold: number;

    refunded: boolean;

    shipping: unknown;

    shipping_address: unknown;

    shipping_fee: unknown;

    shipping_method: unknown;

    status: string;

    storefront_slug: string;

    transaction: number;

    variant_code: unknown;

    variant_id: unknown;

    variant_price: unknown;
  }

  export interface Meta {
    pageCount: number;

    perPage: number;

    quantity_sold: number;

    revenue: number;

    skipped: number;

    total: number;
  }
}

export interface OrderValidateResponse {
  data: OrderValidateResponse.Data;

  message: string;

  status: boolean;
}

export namespace OrderValidateResponse {
  export interface Data {
    id: number;

    amount: number;

    createdAt: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    email: string;

    expiration_date: string;

    integration: Data.Integration;

    is_viewed: boolean;

    metadata: unknown;

    order_code: string;

    page: unknown;

    paid_at: unknown;

    pay_for_me: boolean;

    payer: unknown;

    refunded: boolean;

    shipping: unknown;

    shipping_address: unknown;

    shipping_fees: number;

    shipping_method: unknown;

    status: string;

    transaction: unknown;

    updatedAt: string;
  }

  export namespace Data {
    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string;

      international_format_phone: string;

      last_name: string;

      metadata: unknown;

      phone: string;

      risk_action: string;
    }

    export interface Integration {
      allowed_currencies: Array<unknown>;

      key: string;

      logo: string;

      name: string;
    }
  }
}

export interface OrderCreateParams {
  /**
   * Currency in which amount is set
   */
  currency: 'GHS' | 'KES' | 'NGN' | 'USD' | 'ZAR';

  /**
   * The email of the customer placing the order
   */
  email: string;

  /**
   * The customer's first name
   */
  first_name: string;

  items: Array<OrderCreateParams.Item>;

  /**
   * The customer's last name
   */
  last_name: string;

  /**
   * The customer's mobile number
   */
  phone: string;

  /**
   * The shipping details of the order
   */
  shipping: OrderCreateParams.Shipping;

  /**
   * A flag to indicate if the order is for someone else
   */
  is_gift?: boolean;

  /**
   * A flag to indicate if the someone else should pay for the order
   */
  pay_for_me?: boolean;
}

export namespace OrderCreateParams {
  /**
   * The collection of items that make up the order
   */
  export interface Item {
    /**
     * The cost of the item
     */
    amount: number;

    /**
     * The product ID of the item
     */
    item: number;

    /**
     * The number of items to get
     */
    quantity: number;

    /**
     * The type of the item. `product` is currently the acceptable value
     */
    type: string;
  }

  /**
   * The shipping details of the order
   */
  export interface Shipping {
    /**
     * The city of the delivery address
     */
    city: string;

    /**
     * The country of the delivery address
     */
    country: string;

    /**
     * The cost of delivery
     */
    shipping_fee: number;

    /**
     * The state of the delivery address
     */
    state: string;

    /**
     * The address of for the delivery
     */
    street_line: string;

    /**
     * Extra details to be aware of for the delivery
     */
    delivery_note?: string;
  }
}

export interface OrderListParams {
  /**
   * The start date
   */
  from?: string;

  /**
   * The section to retrieve
   */
  page?: number;

  /**
   * Number of records to fetch per page
   */
  perPage?: number;

  /**
   * The end date
   */
  to?: string;
}

export declare namespace Order {
  export {
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderListResponse as OrderListResponse,
    type OrderFetchProductOrdersResponse as OrderFetchProductOrdersResponse,
    type OrderValidateResponse as OrderValidateResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderListParams as OrderListParams,
  };
}
