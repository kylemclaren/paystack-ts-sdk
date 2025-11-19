// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SplitAPI from './split';
import {
  Split,
  SplitCreateParams,
  SplitCreateResponse,
  SplitRemoveParams,
  SplitRemoveResponse,
} from './split';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DedicatedAccount extends APIResource {
  split: SplitAPI.Split = new SplitAPI.Split(this._client);

  /**
   * Create a dedicated virtual account for an existing customer
   *
   * @example
   * ```ts
   * const dedicatedAccount =
   *   await client.dedicatedAccount.create({
   *     customer: 'CUS_bo732eugpb2qrg6',
   *   });
   * ```
   */
  create(
    body: DedicatedAccountCreateParams,
    options?: RequestOptions,
  ): APIPromise<DedicatedAccountCreateResponse> {
    return this._client.post('/dedicated_account', { body, ...options });
  }

  /**
   * Get details of a dedicated virtual account on your integration.
   *
   * @example
   * ```ts
   * const dedicatedAccount =
   *   await client.dedicatedAccount.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DedicatedAccountRetrieveResponse> {
    return this._client.get(path`/dedicated_account/${id}`, options);
  }

  /**
   * List dedicated virtual accounts available on your integration.
   *
   * @example
   * ```ts
   * const dedicatedAccounts =
   *   await client.dedicatedAccount.list();
   * ```
   */
  list(
    query: DedicatedAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DedicatedAccountListResponse> {
    return this._client.get('/dedicated_account', { query, ...options });
  }

  /**
   * Deactivate a dedicated virtual account on your integration.
   *
   * @example
   * ```ts
   * const dedicatedAccount =
   *   await client.dedicatedAccount.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DedicatedAccountDeleteResponse> {
    return this._client.delete(path`/dedicated_account/${id}`, options);
  }

  /**
   * With this endpoint, you can create a customer, validate the customer, and assign
   * a DVA to the customer.
   *
   * @example
   * ```ts
   * const response = await client.dedicatedAccount.assign({
   *   country: 'NG',
   *   email: 'salmon.orange@email.com',
   *   first_name: 'Salmon',
   *   last_name: 'Orange',
   *   phone: '+2348100000000',
   *   preferred_bank: 'titan-paystack',
   * });
   * ```
   */
  assign(
    body: DedicatedAccountAssignParams,
    options?: RequestOptions,
  ): APIPromise<DedicatedAccountAssignResponse> {
    return this._client.post('/dedicated_account/assign', { body, ...options });
  }

  /**
   * Get available bank providers for a dedicated virtual account
   *
   * @example
   * ```ts
   * const response =
   *   await client.dedicatedAccount.fetchProviders();
   * ```
   */
  fetchProviders(options?: RequestOptions): APIPromise<DedicatedAccountFetchProvidersResponse> {
    return this._client.get('/dedicated_account/available_providers', options);
  }

  /**
   * Requery Dedicated Virtual Account for new transactions
   *
   * @example
   * ```ts
   * const response = await client.dedicatedAccount.requery();
   * ```
   */
  requery(
    query: DedicatedAccountRequeryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DedicatedAccountRequeryResponse> {
    return this._client.get('/dedicated_account/requery', { query, ...options });
  }
}

export interface DedicatedAccountCreateResponse {
  data: DedicatedAccountCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace DedicatedAccountCreateResponse {
  export interface Data {
    id: number;

    account_name: string;

    account_number: string;

    active: boolean;

    assigned: boolean;

    assignment: Data.Assignment;

    bank: Data.Bank;

    created_at: string;

    currency: string;

    customer: Data.Customer;

    metadata: unknown;

    updated_at: string;
  }

  export namespace Data {
    export interface Assignment {
      account_type: string;

      assigned_at: string;

      assignee_id: number;

      assignee_type: string;

      expired: boolean;

      expired_at: unknown;

      integration: number;
    }

    export interface Bank {
      id: number;

      name: string;

      slug: string;
    }

    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string;

      international_format_phone: string | null;

      last_name: string;

      metadata: unknown;

      phone: string;

      risk_action: string;
    }
  }
}

export interface DedicatedAccountRetrieveResponse {
  data: DedicatedAccountRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace DedicatedAccountRetrieveResponse {
  export interface Data {
    id: number;

    account_name: string;

    account_number: string;

    active: boolean;

    assigned: boolean;

    bank: Data.Bank;

    created_at: string;

    currency: string;

    customer: Data.Customer;

    split_config: unknown;

    updated_at: string;
  }

  export namespace Data {
    export interface Bank {
      id: number;

      name: string;

      slug: string;
    }

    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string;

      international_format_phone: string | null;

      last_name: string;

      metadata: unknown;

      phone: string;

      risk_action: string;
    }
  }
}

export interface DedicatedAccountListResponse {
  data: Array<DedicatedAccountListResponse.Data>;

  message: string;

  meta: DedicatedAccountListResponse.Meta;

  status: boolean;
}

export namespace DedicatedAccountListResponse {
  export interface Data {
    id: number;

    account_name: string;

    account_number: string;

    active: boolean;

    assigned: boolean;

    bank: Data.Bank;

    created_at: string;

    currency: string;

    customer: Data.Customer;

    split_config: Data.SplitConfig | null;

    updated_at: string;
  }

  export namespace Data {
    export interface Bank {
      id: number;

      name: string;

      slug: string;
    }

    export interface Customer {
      id?: number;

      customer_code?: string;

      email?: string;

      first_name?: string;

      international_format_phone?: string | null;

      last_name?: string;

      phone?: string;

      risk_action?: string;
    }

    export interface SplitConfig {
      subaccount: string;
    }
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: number;

    skipped: number;

    total: number;
  }
}

export interface DedicatedAccountDeleteResponse {
  data: DedicatedAccountDeleteResponse.Data;

  message: string;

  status: boolean;
}

export namespace DedicatedAccountDeleteResponse {
  export interface Data {
    id: number;

    account_name: string;

    account_number: string;

    active: boolean;

    assigned: boolean;

    assignment: Data.Assignment;

    bank: Data.Bank;

    created_at: string;

    currency: string;

    metadata: unknown;

    updated_at: string;
  }

  export namespace Data {
    export interface Assignment {
      account_type: string;

      assigned_at: string;

      assignee_id: number;

      assignee_type: string;

      integration: number;
    }

    export interface Bank {
      id: number;

      name: string;

      slug: string;
    }
  }
}

export interface DedicatedAccountAssignResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface DedicatedAccountFetchProvidersResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface DedicatedAccountRequeryResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface DedicatedAccountCreateParams {
  /**
   * The code for the previously created customer
   */
  customer: string;

  /**
   * The bank slug for preferred bank. To get a list of available banks, use the List
   * Providers endpoint
   */
  preferred_bank?: string;

  /**
   * Split code consisting of the lists of accounts you want to split the transaction
   * with
   */
  split_code?: string;

  /**
   * Subaccount code of the account you want to split the transaction with
   */
  subaccount?: string;
}

export interface DedicatedAccountListParams {
  /**
   * Status of the dedicated virtual account
   */
  active?: boolean;

  /**
   * The bank's ID
   */
  bank_id?: string;

  /**
   * The currency of the dedicated virtual account
   */
  currency?: 'NGN' | 'GHS';

  /**
   * The customer's ID
   */
  customer?: number;

  /**
   * The offset to retrieve data from
   */
  page?: number;

  /**
   * The number of records to fetch per request
   */
  perPage?: number;

  /**
   * The bank's slug in lowercase, without spaces
   */
  provider_slug?: string;
}

export interface DedicatedAccountAssignParams {
  /**
   * The two letter code country
   */
  country: 'NG' | 'GH';

  /**
   * Customer's email address
   */
  email: string;

  /**
   * Customer's first name
   */
  first_name: string;

  /**
   * Customer's last name
   */
  last_name: string;

  /**
   * Customer's phone name
   */
  phone: string;

  /**
   * The bank slug for preferred bank. To get a list of available banks, use the List
   * Banks endpoint, passing `pay_with_bank_transfer=true` query parameter
   */
  preferred_bank: string;

  /**
   * Customer's account number
   */
  account_number?: string;

  /**
   * Customer's bank code
   */
  bank_code?: string;

  /**
   * Customer's Bank Verification Number
   */
  bvn?: string;

  /**
   * Split code consisting of the lists of accounts you want to split the transaction
   * with
   */
  split_code?: string;

  /**
   * Subaccount code of the account you want to split the transaction with
   */
  subaccount?: string;
}

export interface DedicatedAccountRequeryParams {
  /**
   * Virtual account number to requery
   */
  account_number?: string;

  /**
   * The day the transfer was made
   */
  date?: string;

  /**
   * The bank's slug in lowercase, without spaces.
   */
  provider_slug?: string;
}

DedicatedAccount.Split = Split;

export declare namespace DedicatedAccount {
  export {
    type DedicatedAccountCreateResponse as DedicatedAccountCreateResponse,
    type DedicatedAccountRetrieveResponse as DedicatedAccountRetrieveResponse,
    type DedicatedAccountListResponse as DedicatedAccountListResponse,
    type DedicatedAccountDeleteResponse as DedicatedAccountDeleteResponse,
    type DedicatedAccountAssignResponse as DedicatedAccountAssignResponse,
    type DedicatedAccountFetchProvidersResponse as DedicatedAccountFetchProvidersResponse,
    type DedicatedAccountRequeryResponse as DedicatedAccountRequeryResponse,
    type DedicatedAccountCreateParams as DedicatedAccountCreateParams,
    type DedicatedAccountListParams as DedicatedAccountListParams,
    type DedicatedAccountAssignParams as DedicatedAccountAssignParams,
    type DedicatedAccountRequeryParams as DedicatedAccountRequeryParams,
  };

  export {
    Split as Split,
    type SplitCreateResponse as SplitCreateResponse,
    type SplitRemoveResponse as SplitRemoveResponse,
    type SplitCreateParams as SplitCreateParams,
    type SplitRemoveParams as SplitRemoveParams,
  };
}
