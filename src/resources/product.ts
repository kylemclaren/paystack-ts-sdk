// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Product extends APIResource {
  /**
   * Create a new product on your integration
   *
   * @example
   * ```ts
   * const product = await client.product.create({
   *   currency: 'NGN',
   *   description: 'Environment friendly paper cups',
   *   name: 'Cups',
   *   price: 10000,
   * });
   * ```
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
    return this._client.post('/product', { body, ...options });
  }

  /**
   * Fetch a previously created product
   *
   * @example
   * ```ts
   * const product = await client.product.retrieve(2196244);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<ProductRetrieveResponse> {
    return this._client.get(path`/product/${id}`, options);
  }

  /**
   * Update a previously created product
   *
   * @example
   * ```ts
   * const product = await client.product.update(2196244);
   * ```
   */
  update(
    id: number,
    body: ProductUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductUpdateResponse> {
    return this._client.put(path`/product/${id}`, { body, ...options });
  }

  /**
   * List all previously created products
   *
   * @example
   * ```ts
   * const products = await client.product.list();
   * ```
   */
  list(
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductListResponse> {
    return this._client.get('/product', { query, ...options });
  }

  /**
   * Delete a previously created product
   *
   * @example
   * ```ts
   * const product = await client.product.delete(2196244);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<ProductDeleteResponse> {
    return this._client.delete(path`/product/${id}`, options);
  }
}

export interface ProductCreateResponse {
  data: ProductCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace ProductCreateResponse {
  export interface Data {
    id: number;

    active: boolean;

    createdAt: string;

    currency: string;

    deleted_at: unknown;

    description: string;

    domain: string;

    files: Array<unknown>;

    in_stock: boolean;

    integration: number;

    is_shippable: boolean;

    low_stock_alert: boolean;

    maximum_orderable: number | null;

    metadata: Data.Metadata;

    minimum_orderable: number;

    name: string;

    price: number;

    product_code: string;

    quantity: number;

    quantity_sold: number;

    shipping_fields: Data.ShippingFields;

    slug: string;

    type: string;

    unlimited: boolean;

    updatedAt: string;

    variants: Array<unknown>;

    variants_options: Array<unknown>;

    redirect_url?: string | null;
  }

  export namespace Data {
    export interface Metadata {
      background_color: string;
    }

    export interface ShippingFields {
      delivery_note: string;

      shipping_address: string;

      shipping_fees: Array<unknown>;
    }
  }
}

export interface ProductRetrieveResponse {
  data: ProductRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace ProductRetrieveResponse {
  export interface Data {
    id: number;

    active: boolean;

    createdAt: string;

    currency: string;

    description: string;

    digital_assets: Array<unknown>;

    domain: string;

    expires_in: unknown;

    features: unknown;

    file_path: unknown;

    files: Array<unknown>;

    in_stock: boolean;

    integration: number;

    is_shippable: boolean;

    low_stock_alert: boolean;

    maximum_orderable: unknown;

    metadata: Data.Metadata;

    minimum_orderable: number;

    name: string;

    notification_emails: unknown;

    price: number;

    product_code: string;

    quantity: number;

    quantity_sold: unknown;

    redirect_url: unknown;

    shipping_fields: Data.ShippingFields;

    slug: string;

    split_code: unknown;

    stock_threshold: unknown;

    success_message: unknown;

    type: string;

    unlimited: boolean;

    updatedAt: string;
  }

  export namespace Data {
    export interface Metadata {
      background_color: string;
    }

    export interface ShippingFields {
      delivery_note: string;

      shipping_address: string;

      shipping_fees: Array<unknown>;
    }
  }
}

export interface ProductUpdateResponse {
  data: ProductUpdateResponse.Data;

  message: string;

  status: boolean;
}

export namespace ProductUpdateResponse {
  export interface Data {
    id: number;

    active: boolean;

    createdAt: string;

    currency: string;

    description: string;

    domain: string;

    expires_in: unknown;

    features: unknown;

    file_path: unknown;

    files: Array<unknown>;

    in_stock: boolean;

    integration: number;

    is_shippable: boolean;

    low_stock_alert: boolean;

    maximum_orderable: unknown;

    metadata: Data.Metadata;

    minimum_orderable: number;

    name: string;

    notification_emails: unknown;

    price: number;

    product_code: string;

    quantity: number;

    quantity_sold: number;

    redirect_url: unknown;

    shipping_fields: Data.ShippingFields;

    slug: string;

    split_code: unknown;

    stock_threshold: unknown;

    success_message: unknown;

    type: string;

    unlimited: boolean;

    updatedAt: string;
  }

  export namespace Data {
    export interface Metadata {
      background_color: string;
    }

    export interface ShippingFields {
      delivery_note: string;

      shipping_address: string;

      shipping_fees: Array<unknown>;
    }
  }
}

export interface ProductListResponse {
  data: Array<ProductListResponse.Data>;

  message: string;

  meta: ProductListResponse.Meta;

  status: boolean;
}

export namespace ProductListResponse {
  export interface Data {
    id: number;

    active: boolean;

    createdAt: string;

    currency: string;

    description: string;

    digital_assets: Array<unknown>;

    domain: string;

    files: Array<unknown>;

    in_stock: boolean;

    integration: number;

    is_shippable: boolean;

    low_stock_alert: number;

    maximum_orderable: unknown;

    metadata: Data.Metadata;

    minimum_orderable: number;

    name: string;

    notification_emails: unknown;

    price: number;

    product_code: string;

    quantity: number;

    quantity_sold: number;

    redirect_url: unknown;

    shipping_fields: Data.ShippingFields;

    slug: string;

    split_code: unknown;

    success_message: unknown;

    type: string;

    unlimited: boolean;

    updatedAt: string;

    variant_options: Array<unknown>;
  }

  export namespace Data {
    export interface Metadata {
      background_color: string;
    }

    export interface ShippingFields {
      delivery_note: string;

      shipping_address: string;

      shipping_fees: Array<unknown>;
    }
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: string;

    skipped: number;

    total: number;
  }
}

export interface ProductDeleteResponse {
  message: string;

  status: boolean;
}

export interface ProductCreateParams {
  /**
   * Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD
   */
  currency: string;

  /**
   * The description of the product
   */
  description: string;

  /**
   * Name of product
   */
  name: string;

  /**
   * Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and
   * cents, if currency is ZAR
   */
  price: number;

  /**
   * Stringified JSON object of custom data
   */
  metadata?: string;

  /**
   * Number of products in stock. Use if limited is true
   */
  quantity?: number;

  /**
   * The split code if sharing the transaction with partners
   */
  split_code?: string;

  /**
   * Set to true if the product has unlimited stock. Leave as false if the product
   * has limited stock
   */
  unlimited?: boolean;
}

export interface ProductUpdateParams {
  /**
   * Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD
   */
  currency?: string;

  /**
   * The description of the product
   */
  description?: string;

  /**
   * JSON object of custom data
   */
  metadata?: unknown;

  /**
   * Name of product
   */
  name?: string;

  /**
   * Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and
   * cents, if currency is ZAR
   */
  price?: number;

  /**
   * Number of products in stock. Use if limited is true
   */
  quantity?: number;

  /**
   * The split code if sharing the transaction with partners
   */
  split_code?: string;

  /**
   * Set to true if the product has unlimited stock. Leave as false if the product
   * has limited stock
   */
  unlimited?: boolean;
}

export interface ProductListParams {
  /**
   * The state of the product
   */
  active?: boolean;

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

export declare namespace Product {
  export {
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductDeleteResponse as ProductDeleteResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };
}
