// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProductAPI from './product';
import { Product, ProductAddParams, ProductAddResponse, ProductListResponse } from './product';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Storefront extends APIResource {
  product: ProductAPI.Product = new ProductAPI.Product(this._client);

  /**
   * Create a digital shop to manage and display your products
   *
   * @example
   * ```ts
   * const storefront = await client.storefront.create({
   *   currency: 'NGN',
   *   name: 'Obi and Sons',
   *   slug: 'obi_and_sons',
   * });
   * ```
   */
  create(body: StorefrontCreateParams, options?: RequestOptions): APIPromise<StorefrontCreateResponse> {
    return this._client.post('/storefront', { body, ...options });
  }

  /**
   * Get the details of a previously created Storefront
   *
   * @example
   * ```ts
   * const storefront = await client.storefront.retrieve(
   *   1559046,
   * );
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<StorefrontRetrieveResponse> {
    return this._client.get(path`/storefront/${id}`, options);
  }

  /**
   * Update the details of a previously created Storefront
   *
   * @example
   * ```ts
   * const storefront = await client.storefront.update(1559046);
   * ```
   */
  update(
    id: number,
    body: StorefrontUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StorefrontUpdateResponse> {
    return this._client.put(path`/storefront/${id}`, { body, ...options });
  }

  /**
   * List the storefronts you previously created
   *
   * @example
   * ```ts
   * const storefronts = await client.storefront.list();
   * ```
   */
  list(
    query: StorefrontListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StorefrontListResponse> {
    return this._client.get('/storefront', { query, ...options });
  }

  /**
   * Delete a previously created Storefront
   *
   * @example
   * ```ts
   * const storefront = await client.storefront.delete(1559046);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<StorefrontDeleteResponse> {
    return this._client.delete(path`/storefront/${id}`, options);
  }

  /**
   * Duplicate a previously created Storefront
   *
   * @example
   * ```ts
   * const response = await client.storefront.duplicate(1559046);
   * ```
   */
  duplicate(id: number, options?: RequestOptions): APIPromise<StorefrontDuplicateResponse> {
    return this._client.post(path`/storefront/${id}/duplicate`, options);
  }

  /**
   * Fetch all orders in your Storefront
   *
   * @example
   * ```ts
   * const response = await client.storefront.fetchOrders(
   *   1559046,
   * );
   * ```
   */
  fetchOrders(id: number, options?: RequestOptions): APIPromise<StorefrontFetchOrdersResponse> {
    return this._client.get(path`/storefront/${id}/order`, options);
  }

  /**
   * Make your Storefront publicly available
   *
   * @example
   * ```ts
   * const response = await client.storefront.publish(1559046);
   * ```
   */
  publish(id: number, options?: RequestOptions): APIPromise<StorefrontPublishResponse> {
    return this._client.post(path`/storefront/${id}/publish`, options);
  }

  /**
   * Verify the availability of a slug before using it for your Storefront
   *
   * @example
   * ```ts
   * const response = await client.storefront.verifySlug(
   *   'struct_and_faces',
   * );
   * ```
   */
  verifySlug(slug: string, options?: RequestOptions): APIPromise<StorefrontVerifySlugResponse> {
    return this._client.get(path`/storefront/verify/${slug}`, options);
  }
}

export interface StorefrontCreateResponse {
  data: StorefrontCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace StorefrontCreateResponse {
  export interface Data {
    id: number;

    background_color: string;

    contacts: Array<Data.Contact>;

    createdAt: string;

    currency: string;

    delivery_note: string;

    description: unknown;

    digital_product_expiry: unknown;

    domain: string;

    integration: number;

    name: string;

    products: Array<unknown>;

    redirect_url: unknown;

    shippable: boolean;

    shipping_fees: Array<unknown>;

    slug: string;

    social_media: Array<unknown>;

    status: string;

    success_message: unknown;

    updatedAt: string;

    welcome_message: unknown;

    metadata?: unknown | null;
  }

  export namespace Data {
    export interface Contact {
      id: number;

      type: number;

      type_name: unknown;

      value: string;
    }
  }
}

export interface StorefrontRetrieveResponse {
  data: StorefrontRetrieveResponse.Data;

  message: string;

  meta: StorefrontRetrieveResponse.Meta;

  status: boolean;
}

export namespace StorefrontRetrieveResponse {
  export interface Data {
    id: number;

    background_color: string;

    contacts: Array<Data.Contact>;

    createdAt: string;

    currency: string;

    delivery_note: string;

    description: unknown;

    digital_product_expiry: unknown;

    domain: string;

    integration: number;

    name: string;

    products: Array<unknown>;

    redirect_url: unknown;

    shippable: boolean;

    shipping_fees: Array<unknown>;

    slug: string;

    social_media: Array<unknown>;

    status: string;

    success_message: unknown;

    updatedAt: string;

    welcome_message: unknown;

    metadata?: unknown | null;
  }

  export namespace Data {
    export interface Contact {
      id: number;

      type: number;

      type_name: unknown;

      value: string;
    }
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: number;

    product_count: number;

    skipped: number;

    total: number;
  }
}

export interface StorefrontUpdateResponse {
  message: string;

  status: boolean;
}

export interface StorefrontListResponse {
  data: Array<StorefrontListResponse.Data>;

  message: string;

  meta: StorefrontListResponse.Meta;

  status: boolean;
}

export namespace StorefrontListResponse {
  export interface Data {
    id: number;

    contacts: Array<unknown>;

    currency: string;

    name: string;

    orders_count: number;

    products: Array<unknown>;

    revenue: unknown;

    shipping_fees: Array<unknown>;

    slug: string;

    social_media: Array<unknown>;

    status: string;
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: number;

    skipped: number;

    total: number;
  }
}

export interface StorefrontDeleteResponse {
  message: string;

  status: boolean;
}

export interface StorefrontDuplicateResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface StorefrontFetchOrdersResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface StorefrontPublishResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface StorefrontVerifySlugResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface StorefrontCreateParams {
  /**
   * Currency for prices of products in your storefront.
   */
  currency: 'GHS' | 'KES' | 'NGN' | 'USD' | 'ZAR';

  /**
   * Name of the storefront
   */
  name: string;

  /**
   * A unique identifier to access your store. Once the storefront is created, it can
   * be accessed from https://paystack.shop/your-slug
   */
  slug: string;

  /**
   * The description of the storefront
   */
  description?: string;
}

export interface StorefrontUpdateParams {
  /**
   * The description of the storefront
   */
  description?: string;

  /**
   * Name of the storefront
   */
  name?: string;

  /**
   * A unique identifier to access your store. Once the storefront is created, it can
   * be accessed from https://paystack.shop/your-slug
   */
  slug?: string;
}

export interface StorefrontListParams {
  /**
   * The offset to retrieve data from
   */
  page?: number;

  /**
   * Number of records to fetch per request
   */
  perPage?: number;

  status?: 'active' | 'inactive';
}

Storefront.Product = Product;

export declare namespace Storefront {
  export {
    type StorefrontCreateResponse as StorefrontCreateResponse,
    type StorefrontRetrieveResponse as StorefrontRetrieveResponse,
    type StorefrontUpdateResponse as StorefrontUpdateResponse,
    type StorefrontListResponse as StorefrontListResponse,
    type StorefrontDeleteResponse as StorefrontDeleteResponse,
    type StorefrontDuplicateResponse as StorefrontDuplicateResponse,
    type StorefrontFetchOrdersResponse as StorefrontFetchOrdersResponse,
    type StorefrontPublishResponse as StorefrontPublishResponse,
    type StorefrontVerifySlugResponse as StorefrontVerifySlugResponse,
    type StorefrontCreateParams as StorefrontCreateParams,
    type StorefrontUpdateParams as StorefrontUpdateParams,
    type StorefrontListParams as StorefrontListParams,
  };

  export {
    Product as Product,
    type ProductListResponse as ProductListResponse,
    type ProductAddResponse as ProductAddResponse,
    type ProductAddParams as ProductAddParams,
  };
}
