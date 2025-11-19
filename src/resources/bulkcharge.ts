// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TransactionAPI from './transaction';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Bulkcharge extends APIResource {
  /**
   * Charge multiple customers in batches
   *
   * @example
   * ```ts
   * const bulkcharge = await client.bulkcharge.create();
   * ```
   */
  create(
    params: BulkchargeCreateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<BulkchargeCreateResponse> {
    const { body } = params ?? {};
    return this._client.post('/bulkcharge', { body: body, ...options });
  }

  /**
   * This endpoint retrieves a specific batch code. It also returns useful
   * information on its progress by way of the `total_charges` and `pending_charges`
   * attributes.
   *
   * @example
   * ```ts
   * const bulkcharge = await client.bulkcharge.retrieve(
   *   'BCH_180tl7oq7cayggh',
   * );
   * ```
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<BulkchargeRetrieveResponse> {
    return this._client.get(path`/bulkcharge/${code}`, options);
  }

  /**
   * List all bulk charge batches.
   *
   * @example
   * ```ts
   * const bulkcharges = await client.bulkcharge.list();
   * ```
   */
  list(
    query: BulkchargeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BulkchargeListResponse> {
    return this._client.get('/bulkcharge', { query, ...options });
  }

  /**
   * This endpoint retrieves the charges associated with a specified batch code
   *
   * @example
   * ```ts
   * const response = await client.bulkcharge.listCharges(
   *   'BCH_180tl7oq7cayggh',
   * );
   * ```
   */
  listCharges(
    code: string,
    query: BulkchargeListChargesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BulkchargeListChargesResponse> {
    return this._client.get(path`/bulkcharge/${code}/charges`, { query, ...options });
  }

  /**
   * Pause the processing of a charge batch
   *
   * @example
   * ```ts
   * const response = await client.bulkcharge.pause(
   *   'BCH_180tl7oq7cayggh',
   * );
   * ```
   */
  pause(code: string, options?: RequestOptions): APIPromise<BulkchargePauseResponse> {
    return this._client.get(path`/bulkcharge/pause/${code}`, options);
  }

  /**
   * Resume the processing of a previously paused charge batch
   *
   * @example
   * ```ts
   * const response = await client.bulkcharge.resume(
   *   'BCH_180tl7oq7cayggh',
   * );
   * ```
   */
  resume(code: string, options?: RequestOptions): APIPromise<BulkchargeResumeResponse> {
    return this._client.get(path`/bulkcharge/resume/${code}`, options);
  }
}

export interface BulkchargeCreateResponse {
  data: BulkchargeCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace BulkchargeCreateResponse {
  export interface Data {
    id: number;

    batch_code: string;

    createdAt: string;

    domain: string;

    integration: number;

    pending_charges: number;

    reference: string;

    status: string;

    total_charges: number;

    updatedAt: string;
  }
}

export interface BulkchargeRetrieveResponse {
  data: BulkchargeRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace BulkchargeRetrieveResponse {
  export interface Data {
    id: number;

    batch_code: string;

    createdAt: string;

    domain: string;

    integration: number;

    pending_charges: number;

    reference: string;

    status: string;

    total_charges: number;

    updatedAt: string;
  }
}

export interface BulkchargeListResponse {
  data: Array<BulkchargeListResponse.Data>;

  message: string;

  meta: BulkchargeListResponse.Meta;

  status: boolean;
}

export namespace BulkchargeListResponse {
  export interface Data {
    id: number;

    batch_code: string;

    createdAt: string;

    domain: string;

    easy_cron_id: unknown;

    integration: number;

    reference: string;

    status: string;

    updatedAt: string;
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: number | string;

    skipped: number;

    total: number;
  }
}

export interface BulkchargeListChargesResponse {
  data: Array<BulkchargeListChargesResponse.Data>;

  message: string;

  meta: BulkchargeListChargesResponse.Meta;

  status: boolean;
}

export namespace BulkchargeListChargesResponse {
  export interface Data {
    id: number;

    amount: number;

    at_least: number;

    attempt_partial_debit: boolean;

    authorization: Data.Authorization;

    bulkcharge: number;

    createdAt: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    integration: number;

    message: string;

    metadata: Data.Metadata;

    reference: string;

    status: string;

    updatedAt: string;
  }

  export namespace Data {
    export interface Authorization {
      account_name: unknown;

      authorization_code: string;

      bank: string;

      bin: string;

      brand: string;

      card_type: string;

      channel: string;

      country_code: string;

      exp_month: string;

      exp_year: string;

      last4: string;

      reusable: boolean;

      signature: string;
    }

    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string;

      international_format_phone: string;

      last_name: string;

      metadata: Customer.Metadata;

      phone: string;

      risk_action: string;
    }

    export namespace Customer {
      export interface Metadata {
        calling_code?: string;
      }
    }

    export interface Metadata {
      custom_fields: Array<TransactionAPI.MetadataCustomFields>;
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

export interface BulkchargePauseResponse {
  message: string;

  status: boolean;
}

export interface BulkchargeResumeResponse {
  message: string;

  status: boolean;
}

export interface BulkchargeCreateParams {
  body?: Array<BulkchargeCreateParams.Body>;
}

export namespace BulkchargeCreateParams {
  /**
   * A list of charge object
   */
  export interface Body {
    /**
     * Amount to charge on the authorization
     */
    amount: number;

    /**
     * Customer's card authorization code
     */
    authorization: string;

    /**
     * Minimum amount to charge if the attempt_partial_debit flag is set
     */
    at_least?: number;

    /**
     * A flag to indicate if you want us to try recouping lower amounts when the
     * customer has insufficient fund
     */
    attempt_partial_debit?: boolean;

    /**
     * JSON object of custom data
     */
    metadata?: unknown;

    /**
     * A unique identifier containing lowercase letters `(a-z)`, digits `(0-9)` and
     * these symbols: dash (`-`), underscore(`_`)
     */
    reference?: string;
  }
}

export interface BulkchargeListParams {
  /**
   * The offset to retrieve data from
   */
  page?: number;

  /**
   * Number of records to fetch per page
   */
  perPage?: number;

  /**
   * Filter by the status of the charges
   */
  status?: 'active' | 'paused' | 'complete';
}

export interface BulkchargeListChargesParams {
  /**
   * The offset to retrieve data from
   */
  page?: number;

  /**
   * Number of records to fetch per page
   */
  perPage?: number;

  /**
   * Filter by the status of the charges
   */
  status?: 'success' | 'failed' | 'pending' | 'error' | 'inactive_authorization';
}

export declare namespace Bulkcharge {
  export {
    type BulkchargeCreateResponse as BulkchargeCreateResponse,
    type BulkchargeRetrieveResponse as BulkchargeRetrieveResponse,
    type BulkchargeListResponse as BulkchargeListResponse,
    type BulkchargeListChargesResponse as BulkchargeListChargesResponse,
    type BulkchargePauseResponse as BulkchargePauseResponse,
    type BulkchargeResumeResponse as BulkchargeResumeResponse,
    type BulkchargeCreateParams as BulkchargeCreateParams,
    type BulkchargeListParams as BulkchargeListParams,
    type BulkchargeListChargesParams as BulkchargeListChargesParams,
  };
}
