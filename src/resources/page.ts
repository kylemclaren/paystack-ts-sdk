// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Page extends APIResource {
  /**
   * Create a webpage to receive payments
   *
   * @example
   * ```ts
   * const page = await client.page.create({
   *   name: 'Extra Charges',
   * });
   * ```
   */
  create(body: PageCreateParams, options?: RequestOptions): APIPromise<PageCreateResponse> {
    return this._client.post('/page', { body, ...options });
  }

  /**
   * Get a previously created payment page
   *
   * @example
   * ```ts
   * const page = await client.page.retrieve(1891222);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<PageRetrieveResponse> {
    return this._client.get(path`/page/${id}`, options);
  }

  /**
   * Update a previously created payment page
   *
   * @example
   * ```ts
   * const page = await client.page.update(1891222);
   * ```
   */
  update(
    id: number,
    body: PageUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PageUpdateResponse> {
    return this._client.put(path`/page/${id}`, { body, ...options });
  }

  /**
   * List all previously created payment pages
   *
   * @example
   * ```ts
   * const pages = await client.page.list();
   * ```
   */
  list(
    query: PageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PageListResponse> {
    return this._client.get('/page', { query, ...options });
  }

  /**
   * Add products to a previously created payment page. You can only add products to
   * pages that was created with a `product` type.
   *
   * @example
   * ```ts
   * const response = await client.page.addProduct('id', {
   *   products: [2196244, 2179824],
   * });
   * ```
   */
  addProduct(
    id: string,
    body: PageAddProductParams,
    options?: RequestOptions,
  ): APIPromise<PageAddProductResponse> {
    return this._client.post(path`/page/${id}/product`, { body, ...options });
  }

  /**
   * Check if a custom slug is available for use when creating a payment page
   *
   * @example
   * ```ts
   * const response = await client.page.checkSlugAvailability(
   *   'risky-burger',
   * );
   * ```
   */
  checkSlugAvailability(
    slug: string,
    options?: RequestOptions,
  ): APIPromise<PageCheckSlugAvailabilityResponse> {
    return this._client.get(path`/page/check_slug_availability/${slug}`, options);
  }
}

export interface PageCreateResponse {
  data: PageCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace PageCreateResponse {
  export interface Data {
    id: number;

    active: boolean;

    collect_phone: boolean;

    createdAt: string;

    currency: string;

    domain: string;

    integration: number;

    migrate: boolean;

    name: string;

    published: boolean;

    slug: string;

    type: string;

    updatedAt: string;
  }
}

export interface PageRetrieveResponse {
  data: PageRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace PageRetrieveResponse {
  export interface Data {
    id: number;

    active: boolean;

    amount: number | null;

    collect_phone: boolean;

    createdAt: string;

    currency: string;

    custom_fields: unknown;

    description: unknown;

    domain: string;

    integration: number;

    metadata: unknown;

    migrate: boolean;

    name: string;

    notification_email: unknown;

    published: boolean;

    redirect_url: unknown;

    slug: string;

    split_code: unknown;

    success_message: unknown;

    type: string;

    updatedAt: string;
  }
}

export interface PageUpdateResponse {
  data: PageUpdateResponse.Data;

  message: string;

  status: boolean;
}

export namespace PageUpdateResponse {
  export interface Data {
    id: number;

    active: boolean;

    amount: unknown;

    collect_phone: boolean;

    createdAt: string;

    currency: string;

    custom_fields: unknown;

    description: unknown;

    domain: string;

    integration: number;

    metadata: unknown;

    migrate: boolean;

    name: string;

    notification_email: unknown;

    plan: unknown;

    published: boolean;

    redirect_url: unknown;

    slug: string;

    split_code: unknown;

    success_message: unknown;

    type: string;

    updatedAt: string;
  }
}

export interface PageListResponse {
  data: Array<PageListResponse.Data>;

  message: string;

  meta: PageListResponse.Meta;

  status: boolean;
}

export namespace PageListResponse {
  export interface Data {
    id: number;

    active: boolean;

    amount: number | null;

    collect_phone: boolean;

    createdAt: string;

    currency: string;

    custom_fields: Array<unknown> | null;

    description: string | null;

    domain: string;

    integration: number;

    metadata: unknown | null;

    migrate: boolean;

    name: string;

    notification_email: unknown;

    plan: unknown;

    published: boolean;

    redirect_url: string | null;

    slug: string;

    split_code: unknown;

    success_message: string | null;

    type: string;

    updatedAt: string;
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: number;

    skipped: number;

    total: number;
  }
}

export interface PageAddProductResponse {
  data: PageAddProductResponse.Data;

  message: string;

  status: boolean;
}

export namespace PageAddProductResponse {
  export interface Data {
    id: number;

    active: boolean;

    amount: unknown;

    collect_phone: boolean;

    createdAt: string;

    currency: string;

    custom_fields: unknown;

    description: unknown;

    domain: string;

    integration: number;

    metadata: unknown;

    migrate: boolean;

    name: string;

    notification_email: unknown;

    plan: unknown;

    products: Array<Data.Product>;

    published: boolean;

    redirect_url: unknown;

    slug: string;

    split_code: unknown;

    success_message: unknown;

    type: string;

    updatedAt: string;
  }

  export namespace Data {
    export interface Product {
      active: number;

      currency: string;

      description: string;

      domain: string;

      features: unknown;

      in_stock: number;

      integration: number;

      is_shippable: number;

      name: string;

      page: number;

      price: number;

      product_code: string;

      product_id: number;

      quantity: number;

      type: string;
    }
  }
}

export interface PageCheckSlugAvailabilityResponse {
  message: string;

  status: boolean;
}

export interface PageCreateParams {
  /**
   * Name of page
   */
  name: string;

  /**
   * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and
   * cents, if currency is ZAR
   */
  amount?: number;

  /**
   * Specify whether to collect phone numbers on the payment page
   */
  collect_phone?: boolean;

  /**
   * The transaction currency. Defaults to your integration currency.
   */
  currency?: 'NGN' | 'GHS' | 'ZAR' | 'KES' | 'USD';

  /**
   * If you would like to accept custom fields, specify them here.
   */
  custom_fields?: Array<unknown>;

  /**
   * The description of the page
   */
  description?: string;

  /**
   * Specifies whether to collect a fixed amount on the payment page. If true,
   * `amount` must be passed.
   */
  fixed_amount?: boolean;

  /**
   * JSON object of custom data
   */
  metadata?: unknown;

  /**
   * An email address that will receive transaction notifications for this payment
   * page
   */
  notification_email?: string;

  /**
   * The ID of the plan to subscribe customers on this payment page to when `type` is
   * set to `subscription`.
   */
  plan?: string;

  /**
   * If you would like Paystack to redirect to a URL upon successful payment, specify
   * the URL here.
   */
  redirect_url?: string;

  /**
   * URL slug you would like to be associated with this page. Page will be accessible
   * at `https://paystack.com/pay/[slug]`
   */
  slug?: string;

  /**
   * The split code of the transaction split. e.g. `SPL_98WF13Eb3w`
   */
  split_code?: string;

  /**
   * A success message to display to the customer after a successful transaction
   */
  success_message?: string;

  /**
   * The type of payment page to create. Defaults to `payment` if no type is
   * specified.
   */
  type?: 'payment' | 'subscription' | 'product' | 'plan';
}

export interface PageUpdateParams {
  /**
   * Set to false to deactivate page url
   */
  active?: boolean;

  /**
   * Amount should be in the subunit of the currency
   */
  amount?: number;

  /**
   * The description of the page
   */
  description?: string;

  /**
   * Name of page
   */
  name?: string;
}

export interface PageListParams {
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

export interface PageAddProductParams {
  /**
   * A list of IDs of products to add to a page.
   */
  products: Array<number>;
}

export declare namespace Page {
  export {
    type PageCreateResponse as PageCreateResponse,
    type PageRetrieveResponse as PageRetrieveResponse,
    type PageUpdateResponse as PageUpdateResponse,
    type PageListResponse as PageListResponse,
    type PageAddProductResponse as PageAddProductResponse,
    type PageCheckSlugAvailabilityResponse as PageCheckSlugAvailabilityResponse,
    type PageCreateParams as PageCreateParams,
    type PageUpdateParams as PageUpdateParams,
    type PageListParams as PageListParams,
    type PageAddProductParams as PageAddProductParams,
  };
}
