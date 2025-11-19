// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Plan extends APIResource {
  /**
   * Create a plan for recurring payments
   *
   * @example
   * ```ts
   * const plan = await client.plan.create({
   *   amount: 150000,
   *   interval: 'monthly',
   *   name: 'Basic',
   * });
   * ```
   */
  create(body: PlanCreateParams, options?: RequestOptions): APIPromise<PlanCreateResponse> {
    return this._client.post('/plan', { body, ...options });
  }

  /**
   * Get the details of a payment plan
   *
   * @example
   * ```ts
   * const plan = await client.plan.retrieve(
   *   'PLN_gx2wn530m0i3w3m',
   * );
   * ```
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<PlanRetrieveResponse> {
    return this._client.get(path`/plan/${code}`, options);
  }

  /**
   * Update a plan details on your integration
   *
   * @example
   * ```ts
   * const plan = await client.plan.update(
   *   'PLN_gx2wn530m0i3w3m',
   * );
   * ```
   */
  update(
    code: string,
    body: PlanUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanUpdateResponse> {
    return this._client.put(path`/plan/${code}`, { body, ...options });
  }

  /**
   * List all recurring payment plans
   *
   * @example
   * ```ts
   * const plans = await client.plan.list();
   * ```
   */
  list(
    query: PlanListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanListResponse> {
    return this._client.get('/plan', { query, ...options });
  }
}

export interface PlanCreateResponse {
  data: PlanCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace PlanCreateResponse {
  export interface Data {
    id: number;

    amount: number;

    createdAt: string;

    currency: string;

    domain: string;

    hosted_page: boolean;

    integration: number;

    interval: string;

    invoice_limit: number;

    is_archived: boolean;

    migrate: boolean;

    name: string;

    plan_code: string;

    send_invoices: boolean;

    send_sms: boolean;

    updatedAt: string;
  }
}

export interface PlanRetrieveResponse {
  data: PlanRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace PlanRetrieveResponse {
  export interface Data {
    id: number;

    active_subscriptions_count: number | null;

    amount: number;

    createdAt: string;

    currency: string;

    description: unknown;

    domain: string;

    hosted_page: boolean;

    hosted_page_summary: unknown;

    hosted_page_url: unknown;

    integration: number;

    interval: string;

    invoice_limit: number;

    is_archived: boolean;

    is_deleted: boolean;

    migrate: boolean;

    name: string;

    pages: Array<unknown>;

    pages_count: number;

    plan_code: string;

    send_invoices: boolean;

    send_sms: boolean;

    subscribers: Array<unknown>;

    subscribers_count: number;

    subscriptions: Array<unknown>;

    subscriptions_count: number;

    total_revenue: number;

    updatedAt: string;
  }
}

export interface PlanUpdateResponse {
  message: string;

  status: boolean;
}

export interface PlanListResponse {
  data: Array<PlanListResponse.Data>;

  message: string;

  meta: PlanListResponse.Meta;

  status: boolean;
}

export namespace PlanListResponse {
  export interface Data {
    id: number;

    active_subscriptions: number;

    amount: number;

    createdAt: string;

    currency: string;

    description: unknown;

    domain: string;

    hosted_page: boolean;

    hosted_page_summary: unknown;

    hosted_page_url: unknown;

    integration: number;

    interval: string;

    invoice_limit: number;

    is_archived: boolean;

    is_deleted: boolean;

    migrate: boolean;

    name: string;

    pages: Array<unknown>;

    plan_code: string;

    send_invoices: boolean;

    send_sms: boolean;

    subscriptions: Array<unknown>;

    total_subscriptions: number;

    total_subscriptions_revenue: number;

    updatedAt: string;
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: number;

    skipped: number;

    total: number;
  }
}

export interface PlanCreateParams {
  /**
   * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and
   * cents, if currency is ZAR
   */
  amount: number;

  /**
   * Payment interval
   */
  interval: 'daily' | 'weekly' | 'monthly' | 'biannually' | 'annually';

  /**
   * Name of plan
   */
  name: string;

  /**
   * Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD
   */
  currency?: string;

  /**
   * A description for this plan
   */
  description?: string;

  /**
   * Number of invoices to raise during subscription to this plan. Can be overridden
   * by specifying an invoice_limit while subscribing.
   */
  invoice_limit?: number;

  /**
   * Set to false if you don't want invoices to be sent to your customers
   */
  send_invoices?: boolean;

  /**
   * Set to false if you don't want text messages to be sent to your customers
   */
  send_sms?: boolean;
}

export interface PlanUpdateParams {
  /**
   * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and
   * cents, if currency is ZAR
   */
  amount?: number;

  /**
   * Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD
   */
  currency?: string;

  /**
   * A description for this plan
   */
  description?: boolean;

  /**
   * Payment interval
   */
  interval?: 'daily' | 'weekly' | 'monthly' | 'biannually' | 'annually';

  /**
   * Number of invoices to raise during subscription to this plan. Can be overridden
   * by specifying an invoice_limit while subscribing.
   */
  invoice_limit?: number;

  /**
   * Name of plan
   */
  name?: string;

  /**
   * Set to false if you don't want invoices to be sent to your customers
   */
  send_invoices?: boolean;

  /**
   * Set to false if you don't want text messages to be sent to your customers
   */
  send_sms?: boolean;
}

export interface PlanListParams {
  /**
   * The amount on the plans to retrieve
   */
  amount?: number;

  /**
   * The start date
   */
  from?: string;

  /**
   * Specify interval of the plan
   */
  interval?: 'daily' | 'weekly' | 'monthly' | 'biannually' | 'annually';

  /**
   * The section to retrieve
   */
  page?: number;

  /**
   * Number of records to fetch per page
   */
  perPage?: number;

  /**
   * The end date
   */
  to?: string;
}

export declare namespace Plan {
  export {
    type PlanCreateResponse as PlanCreateResponse,
    type PlanRetrieveResponse as PlanRetrieveResponse,
    type PlanUpdateResponse as PlanUpdateResponse,
    type PlanListResponse as PlanListResponse,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
  };
}
