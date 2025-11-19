// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Refund extends APIResource {
  /**
   * Initiate a refund for a previously completed transaction
   *
   * @example
   * ```ts
   * const refund = await client.refund.create({
   *   transaction: 'mpkr39h74k',
   * });
   * ```
   */
  create(body: RefundCreateParams, options?: RequestOptions): APIPromise<RefundCreateResponse> {
    return this._client.post('/refund', { body, ...options });
  }

  /**
   * Get a previously created refund
   *
   * @example
   * ```ts
   * const refund = await client.refund.retrieve(15581137);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<RefundRetrieveResponse> {
    return this._client.get(path`/refund/${id}`, options);
  }

  /**
   * List previously created refunds
   *
   * @example
   * ```ts
   * const refunds = await client.refund.list();
   * ```
   */
  list(
    query: RefundListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RefundListResponse> {
    return this._client.get('/refund', { query, ...options });
  }

  /**
   * Retry a refund with a `needs-attention` status by providing the bank account
   * details of a customer.
   *
   * @example
   * ```ts
   * const response =
   *   await client.refund.retryWithCustomerDetails(15581137, {
   *     refund_account_details: {
   *       account_number: '1234567890',
   *       bank_id: '9',
   *       currency: 'NGN',
   *     },
   *   });
   * ```
   */
  retryWithCustomerDetails(
    id: number,
    body: RefundRetryWithCustomerDetailsParams,
    options?: RequestOptions,
  ): APIPromise<RefundRetryWithCustomerDetailsResponse> {
    return this._client.post(path`/refund/retry_with_customer_details/${id}`, { body, ...options });
  }
}

export interface RefundCreateResponse {
  data: RefundCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace RefundCreateResponse {
  export interface Data {
    id: number;

    amount: number;

    channel: unknown;

    createdAt: string;

    currency: string;

    customer_note: string;

    deducted_amount: number;

    domain: string;

    expected_at: string;

    fully_deducted: boolean;

    integration: number;

    merchant_note: string;

    refunded_by: string;

    status: string;

    transaction: Data.Transaction;

    updatedAt: string;
  }

  export namespace Data {
    export interface Transaction {
      id: number;

      amount: number;

      authorization: Transaction.Authorization;

      channel: string;

      currency: string;

      customer: Transaction.Customer;

      domain: string;

      fees_breakdown: unknown;

      order_id: unknown;

      paid_at: string;

      paidAt: string;

      plan: unknown;

      pos_transaction_data: unknown;

      reference: string;

      source: unknown;

      split: unknown;

      subaccount: Transaction.Subaccount;
    }

    export namespace Transaction {
      export interface Authorization {
        account_name: unknown;

        exp_month: unknown;

        exp_year: unknown;
      }

      export interface Customer {
        international_format_phone: string | null;
      }

      export interface Subaccount {
        currency: unknown;
      }
    }
  }
}

export interface RefundRetrieveResponse {
  data: RefundRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace RefundRetrieveResponse {
  export interface Data {
    id: number;

    amount: number;

    bank_reference: unknown;

    collect_account_number: boolean;

    createdAt: string;

    currency: string;

    customer: Data.Customer;

    customer_note: string;

    deducted_amount: number;

    dispute: unknown;

    domain: string;

    fully_deducted: number;

    initiated_by: string;

    integration: number;

    merchant_note: string;

    reason: string;

    refund_channel: string;

    refund_type: string;

    refunded_at: unknown;

    refunded_by: string;

    session_id: unknown;

    settlement: unknown;

    status: string;

    transaction: number;

    transaction_amount: number;

    transaction_reference: string;
  }

  export namespace Data {
    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string;

      international_format_phone: string;

      last_name: string;

      metadata: string;

      phone: string;

      risk_action: string;
    }
  }
}

export interface RefundListResponse {
  data: Array<RefundListResponse.Data>;

  message: string;

  meta: RefundListResponse.Meta;

  status: boolean;
}

export namespace RefundListResponse {
  export interface Data {
    id: number;

    amount: number;

    bank_reference: unknown;

    collect_account_number: boolean;

    createdAt: string;

    currency: string;

    customer: Data.Customer;

    customer_note: string;

    deducted_amount: number;

    dispute: unknown;

    domain: string;

    fully_deducted: number;

    initiated_by: string;

    integration: number;

    merchant_note: string;

    reason: string;

    refund_channel: string;

    refund_type: string;

    refunded_at: unknown;

    refunded_by: string;

    session_id: unknown;

    settlement: unknown;

    status: string;

    transaction: number;

    transaction_amount: number;

    transaction_reference: string;
  }

  export namespace Data {
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
  }

  export interface Meta {
    failedRefundCount: number;

    page: number;

    pageCount: number;

    perPage: string;

    skipped: number;

    total: number;
  }
}

export interface RefundRetryWithCustomerDetailsResponse {
  data: RefundRetryWithCustomerDetailsResponse.Data;

  message: string;

  status: boolean;
}

export namespace RefundRetryWithCustomerDetailsResponse {
  export interface Data {
    id: number;

    amount: number;

    bank_reference: string | null;

    channel: string;

    currency: string;

    customer: unknown;

    customer_note: string;

    deducted_amount: number;

    dispute: unknown;

    domain: string;

    expected_at: string;

    fully_deducted: boolean;

    initiated_by: string;

    integration: number;

    merchant_note: string;

    reason: string;

    refunded_at: string | null;

    refunded_by: string;

    reversed_at: string | null;

    session_id: string | null;

    settlement: unknown;

    status: string;

    transaction: number;
  }
}

export interface RefundCreateParams {
  /**
   * The reference of a previosuly completed transaction
   */
  transaction: string;

  /**
   * Amount to be refunded to the customer. It cannot be more than the original
   * transaction amount
   */
  amount?: number;

  /**
   * Three-letter ISO currency
   */
  currency?: 'GHS' | 'KES' | 'NGN' | 'USD' | 'ZAR';

  /**
   * Customer reason
   */
  customer_note?: string;

  /**
   * Merchant reason
   */
  merchant_note?: string;
}

export interface RefundListParams {
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
   * The end date
   */
  to?: string;
}

export interface RefundRetryWithCustomerDetailsParams {
  /**
   * An object that contains the customer’s account details for refund
   */
  refund_account_details: RefundRetryWithCustomerDetailsParams.RefundAccountDetails;
}

export namespace RefundRetryWithCustomerDetailsParams {
  /**
   * An object that contains the customer’s account details for refund
   */
  export interface RefundAccountDetails {
    /**
     * The customer's account number
     */
    account_number: string;

    /**
     * The ID representing the customer's bank. You can get the list of bank IDs by
     * calling the List Banks endpoint.
     */
    bank_id: string;

    /**
     * The currency of the customer's bank account. It should be the same as the
     * currency the payment was made
     */
    currency: string;
  }
}

export declare namespace Refund {
  export {
    type RefundCreateResponse as RefundCreateResponse,
    type RefundRetrieveResponse as RefundRetrieveResponse,
    type RefundListResponse as RefundListResponse,
    type RefundRetryWithCustomerDetailsResponse as RefundRetryWithCustomerDetailsResponse,
    type RefundCreateParams as RefundCreateParams,
    type RefundListParams as RefundListParams,
    type RefundRetryWithCustomerDetailsParams as RefundRetryWithCustomerDetailsParams,
  };
}
