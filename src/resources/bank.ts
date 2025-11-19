// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Bank extends APIResource {
  /**
   * List banks supported on Paystack
   *
   * @example
   * ```ts
   * const banks = await client.bank.list();
   * ```
   */
  list(
    query: BankListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BankListResponse> {
    return this._client.get('/bank', { query, ...options });
  }

  /**
   * Resolve an account number to confirm the name associated with it
   *
   * @example
   * ```ts
   * const response = await client.bank.resolveAccount();
   * ```
   */
  resolveAccount(
    query: BankResolveAccountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BankResolveAccountResponse> {
    return this._client.get('/bank/resolve', { query, ...options });
  }

  /**
   * Confirm the authenticity of a customer's account number before sending money
   *
   * @example
   * ```ts
   * const response = await client.bank.validateAccount({
   *   account_name: 'Ann Bron',
   *   account_number: '0123456789',
   *   account_type: 'personal',
   *   bank_code: '632005',
   *   country_code: 'ZA',
   *   document_type: 'identityNumber',
   * });
   * ```
   */
  validateAccount(
    body: BankValidateAccountParams,
    options?: RequestOptions,
  ): APIPromise<BankValidateAccountResponse> {
    return this._client.post('/bank/validate', { body, ...options });
  }
}

export interface BankListResponse {
  data: Array<BankListResponse.Data>;

  message: string;

  status: boolean;
}

export namespace BankListResponse {
  export interface Data {
    id: number;

    active: boolean;

    available_for_direct_debit: boolean;

    code: string;

    country: string;

    createdAt: string;

    currency: string;

    gateway: string | null;

    is_deleted: boolean | null;

    longcode: string;

    name: string;

    pay_with_bank: boolean;

    slug: string;

    supports_transfer: boolean;

    type: string;

    updatedAt: string;
  }
}

export interface BankResolveAccountResponse {
  data: BankResolveAccountResponse.Data;

  message: string;

  status: boolean;
}

export namespace BankResolveAccountResponse {
  export interface Data {
    account_name: string;

    account_number: string;

    bank_id: number;
  }
}

export interface BankValidateAccountResponse {
  data: BankValidateAccountResponse.Data;

  message: string;

  status: boolean;
}

export namespace BankValidateAccountResponse {
  export interface Data {
    accountAcceptsCredits: boolean;

    accountAcceptsDebits: boolean;

    accountHolderMatch: boolean;

    accountOpen: boolean;

    accountOpenForMoreThanThreeMonths: boolean;

    verificationMessage: string;

    verified: boolean;
  }
}

export interface BankListParams {
  /**
   * The country from which to obtain the list of supported banks
   */
  country?: 'ghana' | 'kenya' | 'nigeria' | 'south africa';

  /**
   * The country from which to obtain the list of supported banks
   */
  currency?: 'GHS' | 'KES' | 'NGN' | 'ZAR';

  /**
   * A flag to filter the banks that are supported for account verification in South
   * Africa. You need to combine this with either the `currency` or `country` filter.
   */
  enabled_for_verification?: boolean;

  /**
   * The type of gateway for a Nigerian bank
   */
  gateway?: 'emandate' | 'digitalbankmandate';

  /**
   * A flag that returns Nigerian banks with their NIP institution code. The returned
   * value can be used in identifying institutions on NIP.
   */
  include_nip_sort_code?: boolean;

  /**
   * An alphanumeric value returned for every cursor based retrieval, used to
   * retrieve the next set of data
   */
  next?: string;

  /**
   * The offset to retrieve data from
   */
  page?: number;

  /**
   * A flag to filter for banks a customer can pay directly from
   */
  pay_with_bank?: boolean;

  /**
   * A flag to filter for available banks a customer can make a transfer to complete
   * a payment
   */
  pay_with_bank_transfer?: boolean;

  /**
   * The number of records to fetch per request
   */
  perPage?: number;

  /**
   * An alphanumeric value returned for every cursor based retrieval, used to
   * retrieve the previous set of data
   */
  previous?: string;

  /**
   * Type of financial channel
   */
  type?: 'ghipps' | 'mobile_money' | 'nuban' | 'kepss' | 'basa';

  /**
   * A flag to indicate if cursor based pagination should be used
   */
  use_cursor?: boolean;
}

export interface BankResolveAccountParams {
  /**
   * The account number of interest
   */
  account_number?: number;

  /**
   * The bank code associated with the account number
   */
  bank_code?: number;
}

export interface BankValidateAccountParams {
  /**
   * Customer's first and last name registered with their bank
   */
  account_name: string;

  /**
   * Customer's account number
   */
  account_number: string;

  /**
   * The type of the customer's account number
   */
  account_type: 'personal' | 'business';

  /**
   * The bank code of the customer’s bank. You can fetch the bank codes by using our
   * List Banks endpoint
   */
  bank_code: string;

  /**
   * The two digit ISO code of the customer’s bank
   */
  country_code: string;

  /**
   * Customer’s mode of identity
   */
  document_type: 'identityNumber' | 'passportNumber' | 'businessRegistrationNumber';

  /**
   * Customer’s mode of identity number
   */
  document_number?: string;
}

export declare namespace Bank {
  export {
    type BankListResponse as BankListResponse,
    type BankResolveAccountResponse as BankResolveAccountResponse,
    type BankValidateAccountResponse as BankValidateAccountResponse,
    type BankListParams as BankListParams,
    type BankResolveAccountParams as BankResolveAccountParams,
    type BankValidateAccountParams as BankValidateAccountParams,
  };
}
