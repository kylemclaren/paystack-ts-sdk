// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Authorization extends APIResource {
  /**
   * Deactivate an authorization for any payment channel.
   *
   * @example
   * ```ts
   * const response =
   *   await client.customer.authorization.deactivate({
   *     authorization_code: 'AUTH_xxxIjkZVj5',
   *   });
   * ```
   */
  deactivate(
    body: AuthorizationDeactivateParams,
    options?: RequestOptions,
  ): APIPromise<AuthorizationDeactivateResponse> {
    return this._client.post('/customer/authorization/deactivate', { body, ...options });
  }

  /**
   * Initiate a request to create a reusable authorization code for recurring
   * transactions
   *
   * @example
   * ```ts
   * const response =
   *   await client.customer.authorization.initialize({
   *     channel: 'direct_debit',
   *     email: 'ravi@demo.com',
   *   });
   * ```
   */
  initialize(
    body: AuthorizationInitializeParams,
    options?: RequestOptions,
  ): APIPromise<AuthorizationInitializeResponse> {
    return this._client.post('/customer/authorization/initialize', { body, ...options });
  }

  /**
   * Check the status of an authorization request
   *
   * @example
   * ```ts
   * const response = await client.customer.authorization.verify(
   *   'dfbzfotsrbv4n5s82t4mp5b5mfn51h',
   * );
   * ```
   */
  verify(reference: string, options?: RequestOptions): APIPromise<AuthorizationVerifyResponse> {
    return this._client.get(path`/customer/authorization/verify/${reference}`, options);
  }
}

export interface AuthorizationDeactivateResponse {
  message: string;

  status: boolean;
}

export interface AuthorizationInitializeResponse {
  data: AuthorizationInitializeResponse.Data;

  message: string;

  status: boolean;
}

export namespace AuthorizationInitializeResponse {
  export interface Data {
    access_code: string;

    redirect_url: string;

    reference: string;
  }
}

export interface AuthorizationVerifyResponse {
  data: AuthorizationVerifyResponse.Data;

  message: string;

  status: boolean;
}

export namespace AuthorizationVerifyResponse {
  export interface Data {
    active: boolean;

    authorization_code: string;

    bank: string;

    channel: string;

    customer: Data.Customer;
  }

  export namespace Data {
    export interface Customer {
      code: string;

      email: string;
    }
  }
}

export interface AuthorizationDeactivateParams {
  /**
   * Authorization code to be deactivated
   */
  authorization_code: string;
}

export interface AuthorizationInitializeParams {
  /**
   * direct_debit is the only supported option for now
   */
  channel: 'direct_debit';

  /**
   * Customer's email address
   */
  email: string;

  account?: AuthorizationInitializeParams.Account;

  address?: AuthorizationInitializeParams.Address;

  /**
   * Fully qualified url (e.g. https://example.com/) to redirect your customer to
   */
  callback_url?: string;
}

export namespace AuthorizationInitializeParams {
  export interface Account {
    /**
     * The code representing the customer's bank
     */
    bank_code: string;

    /**
     * The customer's account number
     */
    number: string;
  }

  export interface Address {
    /**
     * The customer's city
     */
    city: string;

    /**
     * The customer's state
     */
    state: string;

    /**
     * The customer's street
     */
    street: string;
  }
}

export declare namespace Authorization {
  export {
    type AuthorizationDeactivateResponse as AuthorizationDeactivateResponse,
    type AuthorizationInitializeResponse as AuthorizationInitializeResponse,
    type AuthorizationVerifyResponse as AuthorizationVerifyResponse,
    type AuthorizationDeactivateParams as AuthorizationDeactivateParams,
    type AuthorizationInitializeParams as AuthorizationInitializeParams,
  };
}
