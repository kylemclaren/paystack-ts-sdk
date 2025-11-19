// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class PaymentSessionTimeout extends APIResource {
  /**
   * Fetch the session timeout of a transaction
   *
   * @example
   * ```ts
   * const paymentSessionTimeout =
   *   await client.integration.paymentSessionTimeout.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<PaymentSessionTimeoutRetrieveResponse> {
    return this._client.get('/integration/payment_session_timeout', options);
  }

  /**
   * Update the session timeout of a transaction
   *
   * @example
   * ```ts
   * const paymentSessionTimeout =
   *   await client.integration.paymentSessionTimeout.update({
   *     timeout: 30,
   *   });
   * ```
   */
  update(
    body: PaymentSessionTimeoutUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentSessionTimeoutUpdateResponse> {
    return this._client.put('/integration/payment_session_timeout', { body, ...options });
  }
}

export interface PaymentSessionTimeoutRetrieveResponse {
  data: PaymentSessionTimeoutRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace PaymentSessionTimeoutRetrieveResponse {
  export interface Data {
    payment_session_timeout: number;
  }
}

export interface PaymentSessionTimeoutUpdateResponse {
  data: PaymentSessionTimeoutUpdateResponse.Data;

  message: string;

  status: boolean;
}

export namespace PaymentSessionTimeoutUpdateResponse {
  export interface Data {
    payment_session_timeout: number;
  }
}

export interface PaymentSessionTimeoutUpdateParams {
  /**
   * Time in seconds before a transaction becomes invalid
   */
  timeout: number;
}

export declare namespace PaymentSessionTimeout {
  export {
    type PaymentSessionTimeoutRetrieveResponse as PaymentSessionTimeoutRetrieveResponse,
    type PaymentSessionTimeoutUpdateResponse as PaymentSessionTimeoutUpdateResponse,
    type PaymentSessionTimeoutUpdateParams as PaymentSessionTimeoutUpdateParams,
  };
}
