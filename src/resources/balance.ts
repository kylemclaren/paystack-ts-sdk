// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Balance extends APIResource {
  /**
   * Fetch the available balance on your integration
   */
  fetch(options?: RequestOptions): APIPromise<BalanceFetchResponse> {
    return this._client.get('/balance', options);
  }

  /**
   * Fetch all pay-ins and pay-outs that occured on your integration
   */
  fetchLedger(
    query: BalanceFetchLedgerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BalanceFetchLedgerResponse> {
    return this._client.get('/balance/ledger', { query, ...options });
  }
}

export interface BalanceFetchResponse {
  data: Array<BalanceFetchResponse.Data>;

  message: string;

  status: boolean;
}

export namespace BalanceFetchResponse {
  export interface Data {
    balance: number;

    currency: string;
  }
}

export interface BalanceFetchLedgerResponse {
  data: Array<BalanceFetchLedgerResponse.Data>;

  message: string;

  meta: BalanceFetchLedgerResponse.Meta;

  status: boolean;
}

export namespace BalanceFetchLedgerResponse {
  export interface Data {
    id: number;

    balance: number;

    createdAt: string;

    currency: string;

    difference: number;

    domain: string;

    integration: number;

    model_responsible: string;

    model_row: number;

    reason: string;

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

export interface BalanceFetchLedgerParams {
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

export declare namespace Balance {
  export {
    type BalanceFetchResponse as BalanceFetchResponse,
    type BalanceFetchLedgerResponse as BalanceFetchLedgerResponse,
    type BalanceFetchLedgerParams as BalanceFetchLedgerParams,
  };
}
