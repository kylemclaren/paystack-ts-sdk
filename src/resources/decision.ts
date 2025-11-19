// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Decision extends APIResource {
  /**
   * Get the details of a card BIN
   *
   * @example
   * ```ts
   * const response = await client.decision.resolveBin(539983);
   * ```
   */
  resolveBin(bin: number, options?: RequestOptions): APIPromise<DecisionResolveBinResponse> {
    return this._client.get(path`/decision/bin/${bin}`, options);
  }
}

export interface DecisionResolveBinResponse {
  data: DecisionResolveBinResponse.Data;

  message: string;

  status: boolean;
}

export namespace DecisionResolveBinResponse {
  export interface Data {
    bank: string;

    bin: string;

    brand: string;

    card_type: string;

    country_code: string;

    country_name: string;

    currency: string;

    linked_bank_id: number;

    sub_brand: string;
  }
}

export declare namespace Decision {
  export { type DecisionResolveBinResponse as DecisionResolveBinResponse };
}
