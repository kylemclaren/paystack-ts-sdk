// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SplitAPI from './split';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subaccount extends APIResource {
  /**
   * Add a subaccount to a split configuration, or update the share of an existing
   * subaccount
   *
   * @example
   * ```ts
   * const response = await client.split.subaccount.add(4896895);
   * ```
   */
  add(
    id: number,
    body: SubaccountAddParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubaccountAddResponse> {
    return this._client.post(path`/split/${id}/subaccount/add`, { body, ...options });
  }

  /**
   * Remove a subaccount from a split configuration
   *
   * @example
   * ```ts
   * const subaccount = await client.split.subaccount.remove(
   *   4896895,
   * );
   * ```
   */
  remove(
    id: number,
    body: SubaccountRemoveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubaccountRemoveResponse> {
    return this._client.post(path`/split/${id}/subaccount/remove`, { body, ...options });
  }
}

export interface SplitSubaccounts {
  /**
   * The percentage or flat quota of the customer or partner
   */
  share?: number;

  /**
   * Subaccount code of the customer or partner
   */
  subaccount?: string;
}

export interface SubaccountAddResponse {
  data: SubaccountAddResponse.Data;

  message: string;

  status: boolean;
}

export namespace SubaccountAddResponse {
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

export interface SubaccountRemoveResponse {
  message: string;

  status: boolean;
}

export interface SubaccountAddParams {
  /**
   * The percentage or flat quota of the customer or partner
   */
  share?: number;

  /**
   * Subaccount code of the customer or partner
   */
  subaccount?: string;
}

export interface SubaccountRemoveParams {
  /**
   * The percentage or flat quota of the customer or partner
   */
  share?: number;

  /**
   * Subaccount code of the customer or partner
   */
  subaccount?: string;
}

export declare namespace Subaccount {
  export {
    type SplitSubaccounts as SplitSubaccounts,
    type SubaccountAddResponse as SubaccountAddResponse,
    type SubaccountRemoveResponse as SubaccountRemoveResponse,
    type SubaccountAddParams as SubaccountAddParams,
    type SubaccountRemoveParams as SubaccountRemoveParams,
  };
}
