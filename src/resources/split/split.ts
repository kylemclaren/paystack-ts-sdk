// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SplitAPI from './split';
import * as SubaccountAPI from './subaccount';
import {
  SplitSubaccounts,
  Subaccount as SubaccountAPISubaccount,
  SubaccountAddParams,
  SubaccountAddResponse,
  SubaccountRemoveParams,
  SubaccountRemoveResponse,
} from './subaccount';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Split extends APIResource {
  subaccount: SubaccountAPI.Subaccount = new SubaccountAPI.Subaccount(this._client);

  /**
   * Create a split configuration for transactions
   *
   * @example
   * ```ts
   * const split = await client.split.create({
   *   currency: 'NGN',
   *   name: 'Halfsies',
   *   subaccounts: [{}],
   *   type: 'percentage',
   * });
   * ```
   */
  create(body: SplitCreateParams, options?: RequestOptions): APIPromise<SplitCreateResponse> {
    return this._client.post('/split', { body, ...options });
  }

  /**
   * Get details of a split configuration for a transaction
   *
   * @example
   * ```ts
   * const split = await client.split.retrieve(4896895);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<SplitRetrieveResponse> {
    return this._client.get(path`/split/${id}`, options);
  }

  /**
   * Update a split configuration for transactions
   *
   * @example
   * ```ts
   * const split = await client.split.update('id');
   * ```
   */
  update(
    id: string,
    body: SplitUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SplitUpdateResponse> {
    return this._client.put(path`/split/${id}`, { body, ...options });
  }

  /**
   * List the transaction splits available on your integration
   *
   * @example
   * ```ts
   * const splits = await client.split.list();
   * ```
   */
  list(
    query: SplitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SplitListResponse> {
    return this._client.get('/split', { query, ...options });
  }
}

/**
 * Split configuration for transactions
 */
export interface SplitCreate {
  /**
   * The transaction currency
   */
  currency: 'NGN' | 'GHS' | 'ZAR' | 'USD';

  /**
   * Name of the transaction split
   */
  name: string;

  /**
   * A list of object containing subaccount code and number of shares
   */
  subaccounts: Array<SubaccountAPI.SplitSubaccounts>;

  /**
   * The type of transaction split you want to create.
   */
  type: 'percentage' | 'flat';

  /**
   * This is the subaccount code of the customer or partner that would bear the
   * transaction charge if you specified subaccount as the bearer type
   */
  bearer_subaccount?: string;

  /**
   * This allows you specify how the transaction charge should be processed
   */
  bearer_type?: 'subaccount' | 'account' | 'all-proportional' | 'all';
}

export interface SplitSubaccountsArray {
  share: number;

  subaccount: SplitSubaccountsArray.Subaccount;
}

export namespace SplitSubaccountsArray {
  export interface Subaccount {
    id: number;

    account_number: string;

    business_name: string;

    currency: string;

    description: string;

    metadata: string;

    primary_contact_email: string;

    primary_contact_name: string;

    primary_contact_phone: string;

    settlement_bank: string;

    subaccount_code: string;
  }
}

export interface SplitCreateResponse {
  data: SplitCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace SplitCreateResponse {
  export interface Data {
    id: number;

    active: boolean;

    bearer_type: string;

    createdAt: string;

    currency: string;

    domain: string;

    integration: number;

    is_dynamic: boolean;

    name: string;

    split_code: string;

    subaccounts: Array<SplitAPI.SplitSubaccountsArray>;

    total_subaccounts: number;

    type: string;

    updatedAt: string;

    bearer_subaccount?: number;
  }
}

export interface SplitRetrieveResponse {
  data: SplitRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace SplitRetrieveResponse {
  export interface Data {
    id: number;

    active: boolean;

    bearer_subaccount: number;

    bearer_type: string;

    createdAt: string;

    currency: string;

    domain: string;

    integration: number;

    is_dynamic: boolean;

    name: string;

    split_code: string;

    subaccounts: Array<SplitAPI.SplitSubaccountsArray>;

    total_subaccounts: number;

    type: string;

    updatedAt: string;
  }
}

export interface SplitUpdateResponse {
  data: SplitUpdateResponse.Data;

  message: string;

  status: boolean;
}

export namespace SplitUpdateResponse {
  export interface Data {
    id: number;

    active: boolean;

    bearer_subaccount: number;

    bearer_type: string;

    createdAt: string;

    currency: string;

    domain: string;

    integration: number;

    is_dynamic: boolean;

    name: string;

    split_code: string;

    subaccounts: Array<SplitAPI.SplitSubaccountsArray>;

    total_subaccounts: number;

    type: string;

    updatedAt: string;
  }
}

export interface SplitListResponse {
  data: Array<SplitListResponse.Data>;

  message: string;

  meta: SplitListResponse.Meta;

  status: boolean;
}

export namespace SplitListResponse {
  export interface Data {
    id: number;

    active: boolean;

    bearer_subaccount: number | null;

    bearer_type: string;

    createdAt: string;

    currency: string;

    domain: string;

    integration: number;

    is_dynamic: boolean;

    name: string;

    split_code: string;

    subaccounts: Array<SplitAPI.SplitSubaccountsArray>;

    total_subaccounts: number;

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

export interface SplitCreateParams {
  /**
   * The transaction currency
   */
  currency: 'NGN' | 'GHS' | 'ZAR' | 'USD';

  /**
   * Name of the transaction split
   */
  name: string;

  /**
   * A list of object containing subaccount code and number of shares
   */
  subaccounts: Array<SubaccountAPI.SplitSubaccounts>;

  /**
   * The type of transaction split you want to create.
   */
  type: 'percentage' | 'flat';

  /**
   * This is the subaccount code of the customer or partner that would bear the
   * transaction charge if you specified subaccount as the bearer type
   */
  bearer_subaccount?: string;

  /**
   * This allows you specify how the transaction charge should be processed
   */
  bearer_type?: 'subaccount' | 'account' | 'all-proportional' | 'all';
}

export interface SplitUpdateParams {
  /**
   * Toggle status of split. When true, the split is active, else it's inactive
   */
  active?: boolean;

  /**
   * This is the subaccount code of the customer or partner that would bear the
   * transaction charge if you specified subaccount as the bearer type
   */
  bearer_subaccount?: string;

  /**
   * This allows you specify how the transaction charge should be processed
   */
  bearer_type?: 'subaccount' | 'account' | 'all-proportional' | 'all';

  /**
   * Name of the transaction split
   */
  name?: string;
}

export interface SplitListParams {
  /**
   * The status of the split
   */
  active?: boolean;

  /**
   * The start date
   */
  from?: string;

  /**
   * The name of the split
   */
  name?: string;

  /**
   * The offset to retrieve data from
   */
  page?: number;

  /**
   * The number of records to fetch per request
   */
  per_page?: number;

  /**
   * Filter by subaccount code
   */
  subaccount_code?: string;

  /**
   * The end date
   */
  to?: string;
}

Split.Subaccount = SubaccountAPISubaccount;

export declare namespace Split {
  export {
    type SplitCreate as SplitCreate,
    type SplitSubaccountsArray as SplitSubaccountsArray,
    type SplitCreateResponse as SplitCreateResponse,
    type SplitRetrieveResponse as SplitRetrieveResponse,
    type SplitUpdateResponse as SplitUpdateResponse,
    type SplitListResponse as SplitListResponse,
    type SplitCreateParams as SplitCreateParams,
    type SplitUpdateParams as SplitUpdateParams,
    type SplitListParams as SplitListParams,
  };

  export {
    SubaccountAPISubaccount as Subaccount,
    type SplitSubaccounts as SplitSubaccounts,
    type SubaccountAddResponse as SubaccountAddResponse,
    type SubaccountRemoveResponse as SubaccountRemoveResponse,
    type SubaccountAddParams as SubaccountAddParams,
    type SubaccountRemoveParams as SubaccountRemoveParams,
  };
}
