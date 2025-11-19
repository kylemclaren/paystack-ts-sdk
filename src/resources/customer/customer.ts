// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthorizationAPI from './authorization';
import {
  Authorization,
  AuthorizationDeactivateParams,
  AuthorizationDeactivateResponse,
  AuthorizationInitializeParams,
  AuthorizationInitializeResponse,
  AuthorizationVerifyResponse,
} from './authorization';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Customer extends APIResource {
  authorization: AuthorizationAPI.Authorization = new AuthorizationAPI.Authorization(this._client);

  /**
   * Create a customer on your integration
   *
   * @example
   * ```ts
   * const customer = await client.customer.create({
   *   email: 'rock@sandy.com',
   * });
   * ```
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<CustomerCreateResponse> {
    return this._client.post('/customer', { body, ...options });
  }

  /**
   * Get details of a customer on your integration.
   *
   * @example
   * ```ts
   * const customer = await client.customer.retrieve(
   *   'CUS_c6wqvwmvwopw4ms',
   * );
   * ```
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<CustomerRetrieveResponse> {
    return this._client.get(path`/customer/${code}`, options);
  }

  /**
   * Update a customer's details on your integration
   *
   * @example
   * ```ts
   * const customer = await client.customer.update(
   *   'CUS_c6wqvwmvwopw4ms',
   * );
   * ```
   */
  update(
    code: string,
    body: CustomerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerUpdateResponse> {
    return this._client.put(path`/customer/${code}`, { body, ...options });
  }

  /**
   * List customers on your integration
   *
   * @example
   * ```ts
   * const customers = await client.customer.list();
   * ```
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerListResponse> {
    return this._client.get('/customer', { query, ...options });
  }

  /**
   * Get the list of direct debit mandates associated with a customer
   *
   * @example
   * ```ts
   * const response =
   *   await client.customer.fetchMandateAuthorizations(
   *     297346561,
   *   );
   * ```
   */
  fetchMandateAuthorizations(
    id: number,
    options?: RequestOptions,
  ): APIPromise<CustomerFetchMandateAuthorizationsResponse> {
    return this._client.get(path`/customer/${id}/directdebit-mandate-authorizations`, options);
  }

  /**
   * Initialize the process of linking an account to a customer for Direct Debit
   * transactions
   *
   * @example
   * ```ts
   * const response =
   *   await client.customer.initializeDirectDebit(297346561, {
   *     account: { bank_code: '058', number: '0123456789' },
   *     address: {
   *       city: 'Ikeja',
   *       state: 'Lagos',
   *       street: 'Some Where',
   *     },
   *   });
   * ```
   */
  initializeDirectDebit(
    id: number,
    body: CustomerInitializeDirectDebitParams,
    options?: RequestOptions,
  ): APIPromise<CustomerInitializeDirectDebitResponse> {
    return this._client.post(path`/customer/${id}/initialize-direct-debit`, { body, ...options });
  }

  /**
   * Set customer's risk action by whitelisting or blacklisting the customer
   *
   * @example
   * ```ts
   * const response = await client.customer.setRiskAction({
   *   customer: 'CUS_c6wqvwmvwopw4ms',
   * });
   * ```
   */
  setRiskAction(
    body: CustomerSetRiskActionParams,
    options?: RequestOptions,
  ): APIPromise<CustomerSetRiskActionResponse> {
    return this._client.post('/customer/set_risk_action', { body, ...options });
  }

  /**
   * Trigger an activation charge on an inactive mandate on behalf of your customer
   *
   * @example
   * ```ts
   * const response =
   *   await client.customer.triggerActivationCharge(297346561, {
   *     authorization_id: 1069309917,
   *   });
   * ```
   */
  triggerActivationCharge(
    id: number,
    body: CustomerTriggerActivationChargeParams,
    options?: RequestOptions,
  ): APIPromise<CustomerTriggerActivationChargeResponse> {
    return this._client.put(path`/customer/${id}/directdebit-activation-charge`, { body, ...options });
  }

  /**
   * Validate a customer's identity
   *
   * @example
   * ```ts
   * const response = await client.customer.validate(
   *   'CUS_c6wqvwmvwopw4ms',
   *   {
   *     account_number: '0123456789',
   *     bank_code: '007',
   *     bvn: '20012345677',
   *     country: 'NG',
   *     first_name: 'Jabal',
   *     last_name: 'Cedar',
   *     type: 'bank_account',
   *   },
   * );
   * ```
   */
  validate(
    code: string,
    body: CustomerValidateParams,
    options?: RequestOptions,
  ): APIPromise<CustomerValidateResponse> {
    return this._client.post(path`/customer/${code}/identification`, { body, ...options });
  }
}

export interface CustomerCreateResponse {
  data: CustomerCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace CustomerCreateResponse {
  export interface Data {
    id: number;

    authorizations: Array<unknown>;

    createdAt: string;

    customer_code: string;

    domain: string;

    email: string;

    first_name: string;

    identifications: unknown;

    identified: boolean;

    integration: number;

    last_name: string;

    metadata: Data.Metadata;

    phone: string;

    risk_action: string;

    subscriptions: Array<unknown>;

    transactions: Array<unknown>;

    updatedAt: string;
  }

  export namespace Data {
    export interface Metadata {
      calling_code?: string;
    }
  }
}

export interface CustomerRetrieveResponse {
  data: CustomerRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace CustomerRetrieveResponse {
  export interface Data {
    id: number;

    authorizations: Array<unknown>;

    created_at: string;

    createdAt: string;

    customer_code: string;

    dedicated_account: unknown;

    dedicated_accounts: Array<unknown> | null;

    domain: string;

    email: string;

    first_name: string;

    identifications: unknown;

    identified: boolean;

    integration: number;

    last_name: string;

    metadata: Data.Metadata;

    phone: string;

    risk_action: string;

    subscriptions: Array<unknown>;

    total_transaction_value: Array<unknown>;

    total_transactions: number;

    transactions: Array<unknown>;

    updated_at: string;

    updatedAt: string;
  }

  export namespace Data {
    export interface Metadata {
      calling_code?: string;
    }
  }
}

export interface CustomerUpdateResponse {
  data: CustomerUpdateResponse.Data;

  message: string;

  status: boolean;
}

export namespace CustomerUpdateResponse {
  export interface Data {
    id: number;

    createdAt: string;

    customer_code: string;

    domain: string;

    email: string;

    first_name: string;

    identifications: unknown;

    identified: boolean;

    integration: number;

    last_name: string;

    metadata: unknown;

    phone: string;

    risk_action: string;

    updatedAt: string;
  }
}

export interface CustomerListResponse {
  data: Array<CustomerListResponse.Data>;

  message: string;

  meta: CustomerListResponse.Meta;

  status: boolean;
}

export namespace CustomerListResponse {
  export interface Data {
    id: number;

    createdAt: string;

    customer_code: string;

    domain: string;

    email: string;

    first_name: string | null;

    integration: number;

    last_name: string | null;

    metadata: unknown | null;

    phone: string | null;

    risk_action: string;

    updatedAt: string;
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: string | number;

    skipped: number;

    total: number;
  }
}

export interface CustomerFetchMandateAuthorizationsResponse {
  data: Array<CustomerFetchMandateAuthorizationsResponse.Data>;

  message: string;

  meta: CustomerFetchMandateAuthorizationsResponse.Meta;

  status: boolean;
}

export namespace CustomerFetchMandateAuthorizationsResponse {
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

export interface CustomerInitializeDirectDebitResponse {
  data: CustomerInitializeDirectDebitResponse.Data;

  message: string;

  status: boolean;
}

export namespace CustomerInitializeDirectDebitResponse {
  export interface Data {
    access_code: string;

    redirect_url: string;

    reference: string;
  }
}

export interface CustomerSetRiskActionResponse {
  data: CustomerSetRiskActionResponse.Data;

  message: string;

  status: boolean;
}

export namespace CustomerSetRiskActionResponse {
  export interface Data {
    id: number;

    authorizations: Array<unknown>;

    createdAt: string;

    customer_code: string;

    domain: string;

    email: string;

    first_name: string;

    identifications: unknown;

    identified: boolean;

    integration: number;

    last_name: string;

    metadata: unknown;

    phone: string;

    risk_action: string;

    subscriptions: Array<unknown>;

    transactions: Array<unknown>;

    updatedAt: string;
  }
}

export interface CustomerTriggerActivationChargeResponse {
  message: string;

  status: boolean;
}

export interface CustomerValidateResponse {
  message: string;

  status: boolean;
}

export interface CustomerCreateParams {
  /**
   * Customer's email address
   */
  email: string;

  /**
   * Customer's first name
   */
  first_name?: string;

  /**
   * Customer's last name
   */
  last_name?: string;

  /**
   * Stringified JSON object of custom data
   */
  metadata?: string;

  /**
   * Customer's phone number
   */
  phone?: string;
}

export interface CustomerUpdateParams {
  /**
   * Customer's first name
   */
  first_name?: string;

  /**
   * Customer's last name
   */
  last_name?: string;

  /**
   * Stringified JSON object of custom data
   */
  metadata?: string;

  /**
   * Customer's phone number
   */
  phone?: string;
}

export interface CustomerListParams {
  /**
   * The start date
   */
  from?: string;

  /**
   * An alphanumeric value returned for every cursor based retrieval, used to
   * retrieve the next set of data
   */
  next?: string;

  /**
   * The offset to retrieve data from
   */
  page?: string;

  /**
   * The number of records to fetch per request
   */
  perPage?: string;

  /**
   * An alphanumeric value returned for every cursor based retrieval, used to
   * retrieve the previous set of data
   */
  previous?: string;

  /**
   * The end date
   */
  to?: string;

  /**
   * A flag to indicate if cursor based pagination should be used
   */
  use_cursor?: boolean;
}

export interface CustomerInitializeDirectDebitParams {
  account: CustomerInitializeDirectDebitParams.Account;

  address: CustomerInitializeDirectDebitParams.Address;
}

export namespace CustomerInitializeDirectDebitParams {
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

export interface CustomerSetRiskActionParams {
  /**
   * The customer code from the response of the customer creation
   */
  customer: string;

  /**
   * This determines the fraud rules that should be applied to the customer
   */
  risk_action?: 'allow' | 'deny' | 'default';
}

export interface CustomerTriggerActivationChargeParams {
  /**
   * The authorization ID gotten from the initiation response
   */
  authorization_id: number;
}

export interface CustomerValidateParams {
  /**
   * Customer's bank account number.
   */
  account_number: string;

  /**
   * You can get the list of bank codes by calling the List Banks endpoint
   * (https://api.paystack.co/bank).
   */
  bank_code: string;

  /**
   * Customer's Bank Verification Number
   */
  bvn: string;

  /**
   * Two-letter country code of identification issuer
   */
  country: string;

  /**
   * Customer's first name
   */
  first_name: string;

  /**
   * Customer's last name
   */
  last_name: string;

  /**
   * Predefined types of identification.
   */
  type: string;

  /**
   * Customer's middle name
   */
  middle_name?: string;

  /**
   * Customer's identification number.
   */
  value?: string;
}

Customer.Authorization = Authorization;

export declare namespace Customer {
  export {
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerFetchMandateAuthorizationsResponse as CustomerFetchMandateAuthorizationsResponse,
    type CustomerInitializeDirectDebitResponse as CustomerInitializeDirectDebitResponse,
    type CustomerSetRiskActionResponse as CustomerSetRiskActionResponse,
    type CustomerTriggerActivationChargeResponse as CustomerTriggerActivationChargeResponse,
    type CustomerValidateResponse as CustomerValidateResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerInitializeDirectDebitParams as CustomerInitializeDirectDebitParams,
    type CustomerSetRiskActionParams as CustomerSetRiskActionParams,
    type CustomerTriggerActivationChargeParams as CustomerTriggerActivationChargeParams,
    type CustomerValidateParams as CustomerValidateParams,
  };

  export {
    Authorization as Authorization,
    type AuthorizationDeactivateResponse as AuthorizationDeactivateResponse,
    type AuthorizationInitializeResponse as AuthorizationInitializeResponse,
    type AuthorizationVerifyResponse as AuthorizationVerifyResponse,
    type AuthorizationDeactivateParams as AuthorizationDeactivateParams,
    type AuthorizationInitializeParams as AuthorizationInitializeParams,
  };
}
