// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Product extends APIResource {
  /**
   * List the products in a Storefront
   *
   * @example
   * ```ts
   * const products = await client.storefront.product.list(
   *   1559046,
   * );
   * ```
   */
  list(id: number, options?: RequestOptions): APIPromise<ProductListResponse> {
    return this._client.get(path`/storefront/${id}/product`, options);
  }

  /**
   * Add previously created products to a Storefront
   *
   * @example
   * ```ts
   * const response = await client.storefront.product.add(
   *   1559046,
   *   { products: [2196244, 2179824] },
   * );
   * ```
   */
  add(id: number, body: ProductAddParams, options?: RequestOptions): APIPromise<ProductAddResponse> {
    return this._client.post(path`/storefront/${id}/product`, { body, ...options });
  }
}

export interface ProductListResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface ProductAddResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface ProductAddParams {
  /**
   * An array of product IDs
   */
  products: Array<number>;
}

export declare namespace Product {
  export {
    type ProductListResponse as ProductListResponse,
    type ProductAddResponse as ProductAddResponse,
    type ProductAddParams as ProductAddParams,
  };
}
