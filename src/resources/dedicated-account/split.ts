// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Split extends APIResource {
  /**
   * Split a dedicated virtual account transaction with one or more accounts
   *
   * @example
   * ```ts
   * const split = await client.dedicatedAccount.split.create({
   *   account_number: '0033322211',
   * });
   * ```
   */
  create(body: SplitCreateParams, options?: RequestOptions): APIPromise<SplitCreateResponse> {
    return this._client.post('/dedicated_account/split', { body, ...options });
  }

  /**
   * If you've previously set up split payment for transactions on a dedicated
   * virtual account, you can remove it with this endpoint
   *
   * @example
   * ```ts
   * const split = await client.dedicatedAccount.split.remove({
   *   account_number: '0033322211',
   * });
   * ```
   */
  remove(body: SplitRemoveParams, options?: RequestOptions): APIPromise<SplitRemoveResponse> {
    return this._client.delete('/dedicated_account/split', { body, ...options });
  }
}

export interface SplitCreateResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface SplitRemoveResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface SplitCreateParams {
  /**
   * Valid Dedicated virtual account
   */
  account_number: string;

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

export interface SplitRemoveParams {
  /**
   * Valid Dedicated virtual account
   */
  account_number: string;
}

export declare namespace Split {
  export {
    type SplitCreateResponse as SplitCreateResponse,
    type SplitRemoveResponse as SplitRemoveResponse,
    type SplitCreateParams as SplitCreateParams,
    type SplitRemoveParams as SplitRemoveParams,
  };
}
