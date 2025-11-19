// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ManageAPI from './manage';
import { Manage, ManageGenerateUpdateLinkResponse, ManageSendUpdateLinkResponse } from './manage';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscription extends APIResource {
  manage: ManageAPI.Manage = new ManageAPI.Manage(this._client);

  /**
   * Create a subscription a customer
   *
   * @example
   * ```ts
   * const subscription = await client.subscription.create({
   *   customer: 'CUS_xnxdt6s1zg1f4nx',
   *   plan: 'PLN_gx2wn530m0i3w3m',
   * });
   * ```
   */
  create(body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<SubscriptionCreateResponse> {
    return this._client.post('/subscription', { body, ...options });
  }

  /**
   * Get details of a customer's subscription
   *
   * @example
   * ```ts
   * const subscription = await client.subscription.retrieve(
   *   'SUB_5co81xgmwg78x3d',
   * );
   * ```
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<SubscriptionRetrieveResponse> {
    return this._client.get(path`/subscription/${code}`, options);
  }

  /**
   * List all subscriptions available on your integration
   *
   * @example
   * ```ts
   * const subscriptions = await client.subscription.list();
   * ```
   */
  list(
    query: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListResponse> {
    return this._client.get('/subscription', { query, ...options });
  }

  /**
   * Disable a subscription on your integration
   *
   * @example
   * ```ts
   * const response = await client.subscription.disable({
   *   token: 'd7gofp6yppn3qz7',
   *   code: 'SUB_vsyqdmlzble3uii',
   * });
   * ```
   */
  disable(
    body: SubscriptionDisableParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionDisableResponse> {
    return this._client.post('/subscription/disable', { body, ...options });
  }

  /**
   * Enable a subscription on your integration
   *
   * @example
   * ```ts
   * const response = await client.subscription.enable({
   *   token: 'd7gofp6yppn3qz7',
   *   code: 'SUB_vsyqdmlzble3uii',
   * });
   * ```
   */
  enable(body: SubscriptionEnableParams, options?: RequestOptions): APIPromise<SubscriptionEnableResponse> {
    return this._client.post('/subscription/enable', { body, ...options });
  }
}

export interface SubscriptionToggle {
  /**
   * Email token
   */
  token: string;

  /**
   * Subscription code
   */
  code: string;
}

export interface SubscriptionCreateResponse {
  data: SubscriptionCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace SubscriptionCreateResponse {
  export interface Data {
    id: number;

    amount: number;

    authorization: number;

    cancelledAt: unknown;

    createdAt: string;

    cron_expression: string;

    customer: number;

    domain: string;

    easy_cron_id: string | null;

    email_token: string;

    integration: number;

    invoice_limit: number;

    metadata: unknown | null;

    next_payment_date: string;

    open_invoice: string | null;

    plan: number;

    quantity: number;

    split_code: unknown;

    start: number;

    status: string;

    subscription_code: string;

    updatedAt: string;
  }
}

export interface SubscriptionRetrieveResponse {
  data: SubscriptionRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace SubscriptionRetrieveResponse {
  export interface Data {
    id: number;

    amount: number;

    authorization: Data.Authorization;

    cancelledAt: unknown;

    createdAt: string;

    cron_expression: string;

    customer: Data.Customer;

    domain: string;

    email_token: string;

    integration: number;

    invoice_limit: number;

    invoices: Array<unknown>;

    invoices_history: Array<unknown>;

    metadata: unknown | null;

    most_recent_invoice: unknown;

    next_payment_date: string;

    open_invoice: unknown;

    payments_count: number;

    plan: Data.Plan;

    split_code: unknown;

    status: string;

    subscription_code: string;
  }

  export namespace Data {
    export interface Authorization {
      account_name: unknown;

      authorization_code: string;

      bank: string;

      bin: string;

      brand: string;

      card_type: string;

      channel: string;

      country_code: string;

      exp_month: string;

      exp_year: string;

      last4: string;

      reusable: boolean;

      signature: string;
    }

    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string;

      international_format_phone: string;

      last_name: string;

      metadata: unknown;

      phone: string;

      risk_action: string;
    }

    export interface Plan {
      id: number;

      amount: number;

      currency: string;

      description: unknown;

      interval: string;

      name: string;

      plan_code: string;

      send_invoices: boolean;

      send_sms: boolean;
    }
  }
}

export interface SubscriptionListResponse {
  data: Array<SubscriptionListResponse.Data>;

  message: string;

  meta: SubscriptionListResponse.Meta;

  status: boolean;
}

export namespace SubscriptionListResponse {
  export interface Data {
    id: number;

    amount: number;

    authorization: Data.Authorization;

    createdAt: string;

    cron_expression: string | null;

    customer: Data.Customer;

    domain: string;

    email_token: string;

    integration: number;

    invoice_limit: number;

    metadata: unknown | null;

    most_recent_invoice: unknown;

    next_payment_date: string | null;

    open_invoice: unknown;

    payments_count: number;

    plan: Data.Plan;

    quantity: number;

    split_code: unknown;

    start: number;

    status: string;

    subscription_code: string;
  }

  export namespace Data {
    export interface Authorization {
      account_name: unknown;

      authorization_code: string;

      bank: string;

      bin: string | null;

      brand: string;

      card_type: string | null;

      channel: string;

      country_code: string;

      exp_month: string;

      exp_year: string;

      last4: string;

      reusable: number;

      signature: string | null;
    }

    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string;

      international_format_phone: string;

      last_name: string;

      metadata: string;

      phone: string | null;

      risk_action: string;
    }

    export interface Plan {
      id: number;

      amount: number;

      createdAt: string;

      currency: string;

      description: unknown;

      domain: string;

      integration: number;

      interval: string;

      name: string;

      plan_code: string;

      send_invoices: boolean;

      send_sms: boolean;

      updatedAt: string;
    }
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: number;

    skipped: number;

    total: number;
  }
}

export interface SubscriptionDisableResponse {
  message: string;

  status: boolean;
}

export interface SubscriptionEnableResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface SubscriptionCreateParams {
  /**
   * Customer's email address or customer code
   */
  customer: string;

  /**
   * Plan code
   */
  plan: string;

  /**
   * If customer has multiple authorizations, you can set the desired authorization
   * you wish to use for this subscription here. If this is not supplied, the
   * customer's most recent authorization would be used
   */
  authorization?: string;

  /**
   * Set the date for the first debit. (ISO 8601 format) e.g.
   * 2017-05-16T00:30:13+01:00
   */
  start_date?: string;
}

export interface SubscriptionListParams {
  /**
   * Customer ID
   */
  customer?: string;

  /**
   * The start date
   */
  from?: string;

  /**
   * The section to retrieve
   */
  page?: number;

  /**
   * Number of records to fetch per page
   */
  perPage?: number;

  /**
   * Plan ID
   */
  plan?: number;

  /**
   * The end date
   */
  to?: string;
}

export interface SubscriptionDisableParams {
  /**
   * Email token
   */
  token: string;

  /**
   * Subscription code
   */
  code: string;
}

export interface SubscriptionEnableParams {
  /**
   * Email token
   */
  token: string;

  /**
   * Subscription code
   */
  code: string;
}

Subscription.Manage = Manage;

export declare namespace Subscription {
  export {
    type SubscriptionToggle as SubscriptionToggle,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionRetrieveResponse as SubscriptionRetrieveResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDisableResponse as SubscriptionDisableResponse,
    type SubscriptionEnableResponse as SubscriptionEnableResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDisableParams as SubscriptionDisableParams,
    type SubscriptionEnableParams as SubscriptionEnableParams,
  };

  export {
    Manage as Manage,
    type ManageGenerateUpdateLinkResponse as ManageGenerateUpdateLinkResponse,
    type ManageSendUpdateLinkResponse as ManageSendUpdateLinkResponse,
  };
}
