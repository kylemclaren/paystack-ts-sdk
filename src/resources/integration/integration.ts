// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PaymentSessionTimeoutAPI from './payment-session-timeout';
import {
  PaymentSessionTimeout,
  PaymentSessionTimeoutRetrieveResponse,
  PaymentSessionTimeoutUpdateParams,
  PaymentSessionTimeoutUpdateResponse,
} from './payment-session-timeout';

export class Integration extends APIResource {
  paymentSessionTimeout: PaymentSessionTimeoutAPI.PaymentSessionTimeout =
    new PaymentSessionTimeoutAPI.PaymentSessionTimeout(this._client);
}

Integration.PaymentSessionTimeout = PaymentSessionTimeout;

export declare namespace Integration {
  export {
    PaymentSessionTimeout as PaymentSessionTimeout,
    type PaymentSessionTimeoutRetrieveResponse as PaymentSessionTimeoutRetrieveResponse,
    type PaymentSessionTimeoutUpdateResponse as PaymentSessionTimeoutUpdateResponse,
    type PaymentSessionTimeoutUpdateParams as PaymentSessionTimeoutUpdateParams,
  };
}
