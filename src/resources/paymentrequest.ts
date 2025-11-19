// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentrequestAPI from './paymentrequest';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Paymentrequest extends APIResource {
  /**
   * Create a new payment request by issuing an invoice to a customer
   *
   * @example
   * ```ts
   * const paymentrequest = await client.paymentrequest.create({
   *   amount: 10000,
   *   customer: 'CUS_xqp6o5oja5cackf',
   * });
   * ```
   */
  create(
    body: PaymentrequestCreateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentrequestCreateResponse> {
    return this._client.post('/paymentrequest', { body, ...options });
  }

  /**
   * Fetch a previously created payment request
   *
   * @example
   * ```ts
   * const paymentrequest = await client.paymentrequest.retrieve(
   *   18823736,
   * );
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<PaymentrequestRetrieveResponse> {
    return this._client.get(path`/paymentrequest/${id}`, options);
  }

  /**
   * Update a previously created payment request
   *
   * @example
   * ```ts
   * const paymentrequest = await client.paymentrequest.update(
   *   18823736,
   * );
   * ```
   */
  update(
    id: number,
    body: PaymentrequestUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentrequestUpdateResponse> {
    return this._client.put(path`/paymentrequest/${id}`, { body, ...options });
  }

  /**
   * List all previously created payment requests to your customers
   *
   * @example
   * ```ts
   * const paymentrequests = await client.paymentrequest.list();
   * ```
   */
  list(
    query: PaymentrequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentrequestListResponse> {
    return this._client.get('/paymentrequest', { query, ...options });
  }

  /**
   * Archive a payment request to clean up your records. An archived payment request
   * cannot be verified and will not be returned when listing all previously created
   * payment requests.
   *
   * @example
   * ```ts
   * const response = await client.paymentrequest.archive(
   *   18823736,
   * );
   * ```
   */
  archive(id: number, options?: RequestOptions): APIPromise<PaymentrequestArchiveResponse> {
    return this._client.post(path`/paymentrequest/archive/${id}`, options);
  }

  /**
   * Finalise the creation of a draft payment request for a customer
   *
   * @example
   * ```ts
   * const response = await client.paymentrequest.finalize(
   *   18823736,
   * );
   * ```
   */
  finalize(id: number, options?: RequestOptions): APIPromise<PaymentrequestFinalizeResponse> {
    return this._client.post(path`/paymentrequest/finalize/${id}`, options);
  }

  /**
   * Get the metric of all pending and successful payment requests
   *
   * @example
   * ```ts
   * const response = await client.paymentrequest.getTotals();
   * ```
   */
  getTotals(options?: RequestOptions): APIPromise<PaymentrequestGetTotalsResponse> {
    return this._client.get('/paymentrequest/totals', options);
  }

  /**
   * Trigger an email reminder to a customer for a previously created payment request
   *
   * @example
   * ```ts
   * const response =
   *   await client.paymentrequest.sendNotification(18823736);
   * ```
   */
  sendNotification(id: number, options?: RequestOptions): APIPromise<PaymentrequestSendNotificationResponse> {
    return this._client.post(path`/paymentrequest/notify/${id}`, options);
  }

  /**
   * Verify the status of a previously created payment request
   *
   * @example
   * ```ts
   * const response = await client.paymentrequest.verify(
   *   18823736,
   * );
   * ```
   */
  verify(id: number, options?: RequestOptions): APIPromise<PaymentrequestVerifyResponse> {
    return this._client.get(path`/paymentrequest/verify/${id}`, options);
  }
}

export interface PaymentRequestLineItemsArray {
  amount: number;

  name: string;

  quantity: number;
}

export interface PaymentRequestTaxArray {
  amount: number;

  name: string;
}

export interface PaymentrequestCreateResponse {
  data: PaymentrequestCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace PaymentrequestCreateResponse {
  export interface Data {
    id: number;

    amount: number;

    created_at: string;

    currency: string;

    customer: number;

    description: string | null;

    discount: unknown;

    domain: string;

    due_date: string | null;

    has_invoice: boolean;

    integration: number;

    invoice_number: number | null;

    line_items: Array<unknown>;

    metadata: unknown | null;

    notifications: Array<unknown>;

    offline_reference: string;

    paid: boolean;

    request_code: string;

    split_code: string | null;

    status: string;

    tax: Array<unknown>;
  }
}

export interface PaymentrequestRetrieveResponse {
  data: Array<PaymentrequestRetrieveResponse.Data>;

  message: string;

  meta: PaymentrequestRetrieveResponse.Meta;

  status: boolean;
}

export namespace PaymentrequestRetrieveResponse {
  export interface Data {
    id: number;

    amount: number;

    created_at: string;

    currency: string;

    customer: Data.Customer;

    description: string | null;

    discount: unknown;

    domain: string;

    due_date: string | null;

    has_invoice: boolean;

    integration: number;

    invoice_number: number | null;

    line_items: Array<PaymentrequestAPI.PaymentRequestLineItemsArray>;

    metadata: unknown;

    notifications: Array<unknown>;

    offline_reference: string;

    paid: boolean;

    paid_at: unknown;

    pdf_url: string | null;

    request_code: string;

    split_code: string | null;

    status: string;

    tax: Array<PaymentrequestAPI.PaymentRequestTaxArray>;
  }

  export namespace Data {
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
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: number | string;

    skipped: number;

    total: number;
  }
}

export interface PaymentrequestUpdateResponse {
  data: PaymentrequestUpdateResponse.Data;

  message: string;

  status: boolean;
}

export namespace PaymentrequestUpdateResponse {
  export interface Data {
    id: number;

    amount: number;

    created_at: string;

    currency: string;

    customer: Data.Customer;

    description: unknown;

    discount: unknown;

    domain: string;

    due_date: string | null;

    has_invoice: boolean;

    integration: number;

    invoice_number: number | null;

    line_items: Array<unknown>;

    metadata: unknown;

    notifications: Array<Data.Notification>;

    offline_reference: string;

    paid: boolean;

    paid_at: unknown;

    pdf_url: string | null;

    request_code: string;

    split_code: unknown;

    status: string;

    tax: Array<unknown>;
  }

  export namespace Data {
    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string;

      international_format_phone: string;

      last_name: string;

      metadata: Customer.Metadata;

      phone: string;

      risk_action: string;
    }

    export namespace Customer {
      export interface Metadata {
        calling_code?: string;
      }
    }

    export interface Notification {
      channel: string;

      sent_at: string;
    }
  }
}

export interface PaymentrequestListResponse {
  data: Array<PaymentrequestListResponse.Data>;

  message: string;

  meta: PaymentrequestListResponse.Meta;

  status: boolean;
}

export namespace PaymentrequestListResponse {
  export interface Data {
    id: number;

    amount: number;

    created_at: string;

    currency: string;

    customer: Data.Customer;

    description: string | null;

    discount: unknown;

    domain: string;

    due_date: string | null;

    has_invoice: boolean;

    integration: number;

    invoice_number: number | null;

    line_items: Array<PaymentrequestAPI.PaymentRequestLineItemsArray>;

    metadata: unknown;

    notifications: Array<unknown>;

    offline_reference: string;

    paid: boolean;

    paid_at: unknown;

    pdf_url: string | null;

    request_code: string;

    split_code: string | null;

    status: string;

    tax: Array<PaymentrequestAPI.PaymentRequestTaxArray>;
  }

  export namespace Data {
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
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: number | string;

    skipped: number;

    total: number;
  }
}

export interface PaymentrequestArchiveResponse {
  message: string;

  status: boolean;
}

export interface PaymentrequestFinalizeResponse {
  data: PaymentrequestFinalizeResponse.Data;

  message: string;

  status: boolean;
}

export namespace PaymentrequestFinalizeResponse {
  export interface Data {
    id: number;

    amount: number;

    created_at: string;

    currency: string;

    customer: Data.Customer;

    description: string | null;

    discount: Data.Discount | null;

    domain: string;

    due_date: string | null;

    has_invoice: boolean;

    integration: number;

    invoice_number: number | null;

    line_items: Array<PaymentrequestAPI.PaymentRequestLineItemsArray>;

    metadata: unknown;

    notifications: Array<unknown>;

    offline_reference: string;

    paid: boolean;

    paid_at: unknown;

    pdf_url: unknown;

    pending_amount: number;

    request_code: string;

    split_code: unknown;

    status: string;

    tax: Array<PaymentrequestAPI.PaymentRequestTaxArray>;
  }

  export namespace Data {
    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string;

      international_format_phone: string;

      last_name: string;

      metadata: Customer.Metadata;

      phone: string;

      risk_action: string;
    }

    export namespace Customer {
      export interface Metadata {
        calling_code?: string;
      }
    }

    export interface Discount {
      amount: number;

      type: string;
    }
  }
}

export interface PaymentrequestGetTotalsResponse {
  data: PaymentrequestGetTotalsResponse.Data;

  message: string;

  status: boolean;
}

export namespace PaymentrequestGetTotalsResponse {
  export interface Data {
    pending: Array<Data.Pending>;

    successful: Array<Data.Successful>;

    total: Array<Data.Total>;
  }

  export namespace Data {
    export interface Pending {
      amount: number;

      currency: string;
    }

    export interface Successful {
      amount: number;

      currency: string;
    }

    export interface Total {
      amount: number;

      currency: string;
    }
  }
}

export interface PaymentrequestSendNotificationResponse {
  message: string;

  status: boolean;
}

export interface PaymentrequestVerifyResponse {
  data: PaymentrequestVerifyResponse.Data;

  message: string;

  status: boolean;
}

export namespace PaymentrequestVerifyResponse {
  export interface Data {
    id: number;

    amount: number;

    created_at: string;

    currency: string;

    customer: Data.Customer;

    description: unknown;

    discount: unknown;

    domain: string;

    due_date: string | null;

    has_invoice: boolean;

    integration: Data.Integration;

    invoice_number: number | null;

    line_items: Array<unknown>;

    metadata: unknown;

    notifications: Array<Data.Notification>;

    offline_reference: string;

    paid: boolean;

    paid_at: unknown;

    pdf_url: string | null;

    pending_amount: number;

    request_code: string;

    split_code: unknown;

    status: string;

    tax: Array<unknown>;
  }

  export namespace Data {
    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string;

      international_format_phone: string;

      last_name: string;

      metadata: Customer.Metadata;

      phone: string;

      risk_action: string;
    }

    export namespace Customer {
      export interface Metadata {
        calling_code?: string;
      }
    }

    export interface Integration {
      allowed_currencies: Array<string>;

      key: string;

      logo: string;

      name: string;
    }

    export interface Notification {
      channel: string;

      sent_at: string;
    }
  }
}

export interface PaymentrequestCreateParams {
  /**
   * Payment request amount. Only useful if line items and tax values are ignored.
   * The endpoint will throw a friendly warning if neither is available.
   */
  amount: number;

  /**
   * Customer id or code
   */
  customer: string;

  /**
   * Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD.
   * Defaults to NGN
   */
  currency?: string;

  /**
   * A short description of the payment request
   */
  description?: string;

  /**
   * Indicate if request should be saved as draft. Defaults to false and overrides
   * send_notification
   */
  draft?: boolean;

  /**
   * ISO 8601 representation of request due date
   */
  due_date?: string;

  /**
   * Set to true to create a draft invoice (adds an auto incrementing invoice number
   * if none is provided) even if there are no line_items or tax passed
   */
  has_invoice?: boolean;

  /**
   * Numeric value of invoice. Invoice will start from 1 and auto increment from
   * there. This field is to help override whatever value Paystack decides. Auto
   * increment for subsequent invoices continue from this point.
   */
  invoice_number?: number;

  /**
   * Array of line items
   */
  line_items?: Array<unknown>;

  /**
   * Indicates whether Paystack sends an email notification to customer. Defaults to
   * true
   */
  send_notification?: boolean;

  /**
   * The split code of the transaction split.
   */
  split_code?: string;

  /**
   * Array of taxes
   */
  tax?: Array<unknown>;
}

export interface PaymentrequestUpdateParams {
  /**
   * Payment request amount. Only useful if line items and tax values are ignored.
   * The endpoint will throw a friendly warning if neither is available.
   */
  amount?: number;

  /**
   * Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD.
   * Defaults to NGN
   */
  currency?: string;

  /**
   * Customer id or code
   */
  customer?: string;

  /**
   * A short description of the payment request
   */
  description?: string;

  /**
   * Indicate if request should be saved as draft. Defaults to false and overrides
   * send_notification
   */
  draft?: boolean;

  /**
   * ISO 8601 representation of request due date
   */
  due_date?: string;

  /**
   * Set to true to create a draft invoice (adds an auto incrementing invoice number
   * if none is provided) even if there are no line_items or tax passed
   */
  has_invoice?: boolean;

  /**
   * Numeric value of invoice. Invoice will start from 1 and auto increment from
   * there. This field is to help override whatever value Paystack decides. Auto
   * increment for subsequent invoices continue from this point.
   */
  invoice_number?: number;

  /**
   * Array of line items
   */
  line_items?: Array<unknown>;

  /**
   * Indicates whether Paystack sends an email notification to customer. Defaults to
   * true
   */
  send_notification?: boolean;

  /**
   * The split code of the transaction split.
   */
  split_code?: string;

  /**
   * Array of taxes
   */
  tax?: Array<unknown>;
}

export interface PaymentrequestListParams {
  /**
   * If your integration supports more than one currency, choose the one to filter
   */
  currency?: string;

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
   * Invoice status to filter
   */
  status?: 'draft' | 'pending' | 'success' | 'failed';

  /**
   * The end date
   */
  to?: string;
}

export declare namespace Paymentrequest {
  export {
    type PaymentRequestLineItemsArray as PaymentRequestLineItemsArray,
    type PaymentRequestTaxArray as PaymentRequestTaxArray,
    type PaymentrequestCreateResponse as PaymentrequestCreateResponse,
    type PaymentrequestRetrieveResponse as PaymentrequestRetrieveResponse,
    type PaymentrequestUpdateResponse as PaymentrequestUpdateResponse,
    type PaymentrequestListResponse as PaymentrequestListResponse,
    type PaymentrequestArchiveResponse as PaymentrequestArchiveResponse,
    type PaymentrequestFinalizeResponse as PaymentrequestFinalizeResponse,
    type PaymentrequestGetTotalsResponse as PaymentrequestGetTotalsResponse,
    type PaymentrequestSendNotificationResponse as PaymentrequestSendNotificationResponse,
    type PaymentrequestVerifyResponse as PaymentrequestVerifyResponse,
    type PaymentrequestCreateParams as PaymentrequestCreateParams,
    type PaymentrequestUpdateParams as PaymentrequestUpdateParams,
    type PaymentrequestListParams as PaymentrequestListParams,
  };
}
