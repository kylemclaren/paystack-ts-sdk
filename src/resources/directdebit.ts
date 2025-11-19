// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Directdebit extends APIResource {
  /**
   * Get a list of all the direct debit mandates on your integration
   *
   * @example
   * ```ts
   * const response =
   *   await client.directdebit.listMandateAuthorizations();
   * ```
   */
  listMandateAuthorizations(
    query: DirectdebitListMandateAuthorizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DirectdebitListMandateAuthorizationsResponse> {
    return this._client.get('/directdebit/mandate-authorizations', { query, ...options });
  }

  /**
   * Trigger activation charge for specified customers
   *
   * @example
   * ```ts
   * const response =
   *   await client.directdebit.triggerActivationCharge({
   *     customer_ids: [28958104, 983697220],
   *   });
   * ```
   */
  triggerActivationCharge(
    body: DirectdebitTriggerActivationChargeParams,
    options?: RequestOptions,
  ): APIPromise<DirectdebitTriggerActivationChargeResponse> {
    return this._client.put('/directdebit/activation-charge', { body, ...options });
  }
}

export interface DirectdebitListMandateAuthorizationsResponse {
  data: Array<DirectdebitListMandateAuthorizationsResponse.Data>;

  message: string;

  meta: DirectdebitListMandateAuthorizationsResponse.Meta;

  status: boolean;
}

export namespace DirectdebitListMandateAuthorizationsResponse {
  export interface Data {
    id: number;

    account_number: string;

    authorization_code: string;

    authorization_id: number;

    authorized_at: string;

    bank_code: string;

    customer: Data.Customer;

    integration_id: number;

    mandate_id: number;

    status: string;

    bank_name?: string | null;
  }

  export namespace Data {
    export interface Customer {
      id?: number;

      customer_code?: string;

      email?: string;

      first_name?: string;

      last_name?: string;
    }
  }

  export interface Meta {
    count: number;

    per_page: number;

    total: number;

    next?: string | null;
  }
}

export interface DirectdebitTriggerActivationChargeResponse {
  message: string;

  status: boolean;
}

export interface DirectdebitListMandateAuthorizationsParams {
  /**
   * The cursor value of the next set of authorizations to fetch. You can get this
   * from the meta object of the response
   */
  cursor?: string;

  /**
   * The number of authorizations to fetch per request
   */
  per_page?: number;

  /**
   * Filter by the authorization status
   */
  status?: 'pending' | 'active' | 'revoked';
}

export interface DirectdebitTriggerActivationChargeParams {
  /**
   * Array of customer IDs to trigger activation charge for
   */
  customer_ids: Array<number>;
}

export declare namespace Directdebit {
  export {
    type DirectdebitListMandateAuthorizationsResponse as DirectdebitListMandateAuthorizationsResponse,
    type DirectdebitTriggerActivationChargeResponse as DirectdebitTriggerActivationChargeResponse,
    type DirectdebitListMandateAuthorizationsParams as DirectdebitListMandateAuthorizationsParams,
    type DirectdebitTriggerActivationChargeParams as DirectdebitTriggerActivationChargeParams,
  };
}
