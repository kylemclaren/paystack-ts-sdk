// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SplitAPI from '../split/split';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SplitCode extends APIResource {
  /**
   * Add Split Code to Virtual Terminal
   *
   * @example
   * ```ts
   * const response = await client.virtualTerminal.splitCode.add(
   *   'VT_MCK5292Z',
   *   { split_code: 'SPL_1234567890abcdef' },
   * );
   * ```
   */
  add(code: string, body: SplitCodeAddParams, options?: RequestOptions): APIPromise<SplitCodeAddResponse> {
    return this._client.put(path`/virtual_terminal/${code}/split_code`, { body, ...options });
  }

  /**
   * Remove Split Code from Virtual Terminal
   *
   * @example
   * ```ts
   * const splitCode =
   *   await client.virtualTerminal.splitCode.remove(
   *     'VT_MCK5292Z',
   *     { split_code: 'SPL_1234567890abcdef' },
   *   );
   * ```
   */
  remove(
    code: string,
    body: SplitCodeRemoveParams,
    options?: RequestOptions,
  ): APIPromise<SplitCodeRemoveResponse> {
    return this._client.delete(path`/virtual_terminal/${code}/split_code`, { body, ...options });
  }
}

export interface SplitCodeAddResponse {
  data: SplitCodeAddResponse.Data;

  message: string;

  status: boolean;
}

export namespace SplitCodeAddResponse {
  export interface Data {
    id: number;

    active: boolean;

    bearer_subaccount: unknown;

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

export interface SplitCodeRemoveResponse {
  message: string;

  status: boolean;
}

export interface SplitCodeAddParams {
  /**
   * The split code to assign to the virtual terminal
   */
  split_code: string;
}

export interface SplitCodeRemoveParams {
  /**
   * The split code to assign to the virtual terminal
   */
  split_code: string;
}

export declare namespace SplitCode {
  export {
    type SplitCodeAddResponse as SplitCodeAddResponse,
    type SplitCodeRemoveResponse as SplitCodeRemoveResponse,
    type SplitCodeAddParams as SplitCodeAddParams,
    type SplitCodeRemoveParams as SplitCodeRemoveParams,
  };
}
