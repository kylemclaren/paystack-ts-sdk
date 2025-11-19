// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AddressVerification extends APIResource {
  /**
   * Get a list of states for a country for address verification
   */
  listStates(
    query: AddressVerificationListStatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AddressVerificationListStatesResponse> {
    return this._client.get('/address_verification/states', { query, ...options });
  }
}

export interface AddressVerificationListStatesResponse {
  data: Array<AddressVerificationListStatesResponse.Data>;

  message: string;

  status: boolean;
}

export namespace AddressVerificationListStatesResponse {
  export interface Data {
    abbreviation: string;

    name: string;

    slug: string;
  }
}

export interface AddressVerificationListStatesParams {
  /**
   * The country code of the states to list. It is gotten after the charge request
   */
  country?: string;
}

export declare namespace AddressVerification {
  export {
    type AddressVerificationListStatesResponse as AddressVerificationListStatesResponse,
    type AddressVerificationListStatesParams as AddressVerificationListStatesParams,
  };
}
