// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Subaccount extends APIResource {
  /**
   * Create a subacount for a partner
   *
   * @example
   * ```ts
   * const subaccount = await client.subaccount.create({
   *   account_number: '0123456047',
   *   business_name: 'Oasis',
   *   percentage_charge: 30,
   *   settlement_bank: '058',
   * });
   * ```
   */
  create(body: SubaccountCreateParams, options?: RequestOptions): APIPromise<SubaccountCreateResponse> {
    return this._client.post('/subaccount', { body, ...options });
  }

  /**
   * Get details of a subaccount on your integration
   *
   * @example
   * ```ts
   * const subaccount = await client.subaccount.retrieve(
   *   'ACCT_6uujpqtzmnufzkw',
   * );
   * ```
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<SubaccountRetrieveResponse> {
    return this._client.get(path`/subaccount/${code}`, options);
  }

  /**
   * Update a subaccount details on your integration
   *
   * @example
   * ```ts
   * const subaccount = await client.subaccount.update(
   *   'ACCT_6uujpqtzmnufzkw',
   * );
   * ```
   */
  update(
    code: string,
    body: SubaccountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubaccountUpdateResponse> {
    return this._client.put(path`/subaccount/${code}`, { body, ...options });
  }

  /**
   * List subaccounts available on your integration
   *
   * @example
   * ```ts
   * const subaccounts = await client.subaccount.list();
   * ```
   */
  list(
    query: SubaccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubaccountListResponse> {
    return this._client.get('/subaccount', { query, ...options });
  }
}

export interface SubaccountCreateResponse {
  data: SubaccountCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace SubaccountCreateResponse {
  export interface Data {
    id: number;

    account_number: string;

    active: boolean;

    bank: number;

    business_name: string;

    createdAt: string;

    currency: string;

    description: string;

    domain: string;

    integration: number;

    is_verified: boolean;

    managed_by_integration: number;

    metadata: string;

    migrate: boolean;

    percentage_charge: number;

    primary_contact_email: string;

    primary_contact_name: string;

    primary_contact_phone: string;

    product: string;

    settlement_bank: string;

    settlement_schedule: string;

    subaccount_code: string;

    updatedAt: string;

    account_name?: string | null;
  }
}

export interface SubaccountRetrieveResponse {
  data: SubaccountRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace SubaccountRetrieveResponse {
  export interface Data {
    id: number;

    account_number: string;

    active: boolean;

    bank: number;

    business_name: string;

    createdAt: string;

    currency: string;

    description: string;

    domain: string;

    integration: number;

    is_verified: boolean;

    managed_by_integration: number;

    metadata: string;

    migrate: boolean;

    percentage_charge: number;

    primary_contact_email: string;

    primary_contact_name: string;

    primary_contact_phone: string;

    product: string;

    settlement_bank: string;

    settlement_schedule: string;

    subaccount_code: string;

    updatedAt: string;

    account_name?: string | null;
  }
}

export interface SubaccountUpdateResponse {
  data: SubaccountUpdateResponse.Data;

  message: string;

  status: boolean;
}

export namespace SubaccountUpdateResponse {
  export interface Data {
    id: number;

    account_number: string;

    active: boolean;

    bank: number;

    business_name: string;

    createdAt: string;

    currency: string;

    description: string;

    domain: string;

    integration: number;

    is_verified: boolean;

    managed_by_integration: number;

    metadata: string;

    migrate: boolean;

    percentage_charge: number;

    primary_contact_email: string;

    primary_contact_name: string;

    primary_contact_phone: string;

    product: string;

    settlement_bank: string;

    settlement_schedule: string;

    subaccount_code: string;

    updatedAt: string;

    account_name?: string | null;
  }
}

export interface SubaccountListResponse {
  data: Array<SubaccountListResponse.Data>;

  message: string;

  meta: SubaccountListResponse.Meta;

  status: boolean;
}

export namespace SubaccountListResponse {
  export interface Data {
    id: number;

    account_number: string;

    active: number;

    bank_id: number;

    business_name: string;

    currency: string;

    description: string;

    is_verified: boolean;

    metadata: string;

    percentage_charge: number;

    primary_contact_email: string;

    primary_contact_name: string;

    primary_contact_phone: string;

    settlement_bank: string;

    subaccount_code: string;
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: number;

    skipped: number;

    total: number;
  }
}

export interface SubaccountCreateParams {
  /**
   * Bank account number
   */
  account_number: string;

  /**
   * Name of business for subaccount
   */
  business_name: string;

  /**
   * Customer's phone number
   */
  percentage_charge: number;

  /**
   * Bank code for the bank. You can get the list of Bank Codes by calling the List
   * Banks endpoint.
   */
  settlement_bank: string;

  /**
   * A description for this subaccount
   */
  description?: string;

  /**
   * Stringified JSON object of custom data
   */
  metadata?: string;

  /**
   * A contact email for the subaccount
   */
  primary_contact_email?: string;

  /**
   * The name of the contact person for this subaccount
   */
  primary_contact_name?: string;

  /**
   * A phone number to call for this subaccount
   */
  primary_contact_phone?: string;
}

export interface SubaccountUpdateParams {
  /**
   * Bank account number
   */
  account_number?: string;

  /**
   * Activate or deactivate a subaccount
   */
  active?: boolean;

  /**
   * Name of business for subaccount
   */
  business_name?: string;

  /**
   * A description for this subaccount
   */
  description?: string;

  /**
   * Stringified JSON object of custom data
   */
  metadata?: string;

  /**
   * Customer's phone number
   */
  percentage_charge?: number;

  /**
   * A contact email for the subaccount
   */
  primary_contact_email?: string;

  /**
   * The name of the contact person for this subaccount
   */
  primary_contact_name?: string;

  /**
   * A phone number to call for this subaccount
   */
  primary_contact_phone?: string;

  /**
   * Bank code for the bank. You can get the list of Bank Codes by calling the List
   * Banks endpoint.
   */
  settlement_bank?: string;
}

export interface SubaccountListParams {
  /**
   * Filter by the state of the subaccounts
   */
  active?: boolean;

  /**
   * The offset to retrieve data from
   */
  page?: number;

  /**
   * Number of records to fetch per request
   */
  perPage?: number;
}

export declare namespace Subaccount {
  export {
    type SubaccountCreateResponse as SubaccountCreateResponse,
    type SubaccountRetrieveResponse as SubaccountRetrieveResponse,
    type SubaccountUpdateResponse as SubaccountUpdateResponse,
    type SubaccountListResponse as SubaccountListResponse,
    type SubaccountCreateParams as SubaccountCreateParams,
    type SubaccountUpdateParams as SubaccountUpdateParams,
    type SubaccountListParams as SubaccountListParams,
  };
}
