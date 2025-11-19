// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Settlement extends APIResource {
  /**
   * List settlements made to your settlement accounts
   *
   * @example
   * ```ts
   * const settlements = await client.settlement.list();
   * ```
   */
  list(
    query: SettlementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SettlementListResponse> {
    return this._client.get('/settlement', { query, ...options });
  }

  /**
   * Get the transactions that make up a particular settlement
   *
   * @example
   * ```ts
   * const response =
   *   await client.settlement.retrieveTransactions(8610870);
   * ```
   */
  retrieveTransactions(
    id: number,
    options?: RequestOptions,
  ): APIPromise<SettlementRetrieveTransactionsResponse> {
    return this._client.get(path`/settlement/${id}/transactions`, options);
  }
}

export interface SettlementListResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface SettlementRetrieveTransactionsResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface SettlementListParams {
  /**
   * The offset to retrieve data from
   */
  page?: number;

  /**
   * The number of records to fetch per request
   */
  perPage?: number;
}

export declare namespace Settlement {
  export {
    type SettlementListResponse as SettlementListResponse,
    type SettlementRetrieveTransactionsResponse as SettlementRetrieveTransactionsResponse,
    type SettlementListParams as SettlementListParams,
  };
}
