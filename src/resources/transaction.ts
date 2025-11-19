// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TransactionAPI from './transaction';
import * as SplitAPI from './split/split';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transaction extends APIResource {
  /**
   * Fetch a transaction to get its details
   *
   * @example
   * ```ts
   * const transaction = await client.transaction.retrieve(
   *   4099260516,
   * );
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<TransactionRetrieveResponse> {
    return this._client.get(path`/transaction/${id}`, options);
  }

  /**
   * List transactions that has occurred on your integration
   *
   * @example
   * ```ts
   * const transactions = await client.transaction.list();
   * ```
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get('/transaction', { query, ...options });
  }

  /**
   * Charge all authorizations marked as reusable with this endpoint whenever you
   * need to receive payments
   *
   * @example
   * ```ts
   * const response =
   *   await client.transaction.chargeAuthorization({
   *     amount: 30000,
   *     authorization_code: 'AUTH_df1l5ehnym',
   *     email: 'jb@email.com',
   *   });
   * ```
   */
  chargeAuthorization(
    body: TransactionChargeAuthorizationParams,
    options?: RequestOptions,
  ): APIPromise<TransactionChargeAuthorizationResponse> {
    return this._client.post('/transaction/charge_authorization', { body, ...options });
  }

  /**
   * Download transactions that occurred on your integration for a specific timeframe
   *
   * @example
   * ```ts
   * const response = await client.transaction.export();
   * ```
   */
  export(
    query: TransactionExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionExportResponse> {
    return this._client.get('/transaction/export', { query, ...options });
  }

  /**
   * Fetch the steps taken from the initiation to the completion of a transaction
   *
   * @example
   * ```ts
   * const response = await client.transaction.fetchTimeline(
   *   3936799950,
   * );
   * ```
   */
  fetchTimeline(id: number, options?: RequestOptions): APIPromise<TransactionFetchTimelineResponse> {
    return this._client.get(path`/transaction/timeline/${id}`, options);
  }

  /**
   * Get the total amount of all transactions
   *
   * @example
   * ```ts
   * const response = await client.transaction.getTotals();
   * ```
   */
  getTotals(
    query: TransactionGetTotalsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionGetTotalsResponse> {
    return this._client.get('/transaction/totals', { query, ...options });
  }

  /**
   * Create a new transaction
   *
   * @example
   * ```ts
   * const response = await client.transaction.initialize({
   *   amount: 10000,
   *   email: 'test@demo.com',
   * });
   * ```
   */
  initialize(
    body: TransactionInitializeParams,
    options?: RequestOptions,
  ): APIPromise<TransactionInitializeResponse> {
    return this._client.post('/transaction/initialize', { body, ...options });
  }

  /**
   * Retrieve part of a payment from a customer
   *
   * @example
   * ```ts
   * const response = await client.transaction.partialDebit({
   *   amount: 40510,
   *   authorization_code: 'AUTH_df1l5ehnym',
   *   currency: 'ZAR',
   *   email: 'tap@email.com',
   * });
   * ```
   */
  partialDebit(
    body: TransactionPartialDebitParams,
    options?: RequestOptions,
  ): APIPromise<TransactionPartialDebitResponse> {
    return this._client.post('/transaction/partial_debit', { body, ...options });
  }

  /**
   * Verify a previously initiated transaction using it's reference
   *
   * @example
   * ```ts
   * const response = await client.transaction.verify(
   *   're4lyvq3s3',
   * );
   * ```
   */
  verify(reference: string, options?: RequestOptions): APIPromise<TransactionVerifyResponse> {
    return this._client.get(path`/transaction/verify/${reference}`, options);
  }
}

/**
 * List of all support currencies
 */
export type Currency = 'GHS' | 'KES' | 'NGN' | 'ZAR' | 'USD';

export interface MetadataCustomFields {
  display_name: string;

  value: string;

  variable_name: string;
}

export interface TransactionRetrieveResponse {
  data: TransactionRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransactionRetrieveResponse {
  export interface Data {
    id: number;

    amount: number;

    authorization: Data.Authorization;

    channel: string;

    connect: unknown;

    created_at: string;

    createdAt: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    fees: number;

    fees_breakdown: unknown;

    fees_split: number | null;

    gateway_response: string;

    helpdesk_link: unknown;

    ip_address: string;

    log: Data.Log | null;

    message: unknown;

    metadata: Data.Metadata;

    order_id: unknown;

    paid_at: string;

    paidAt: string;

    plan: unknown;

    pos_transaction_data: unknown;

    receipt_number: unknown;

    reference: string;

    requested_amount: number;

    source: Data.Source;

    split: unknown;

    status: string;

    subaccount: unknown;
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

      receiver_bank: unknown;

      receiver_bank_account_number: unknown;

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

    export interface Log {
      attempts: number;

      errors: number;

      history: Array<Log.History>;

      input: Array<unknown>;

      mobile: boolean;

      start_time: number;

      success: boolean;

      time_spent: number;
    }

    export namespace Log {
      export interface History {
        message: string;

        time: number;

        type: string;
      }
    }

    export interface Metadata {
      custom_fields: Array<TransactionAPI.MetadataCustomFields>;
    }

    export interface Source {
      identifier: unknown;

      source: string;

      type: string;
    }
  }
}

export interface TransactionListResponse {
  data: Array<TransactionListResponse.Data>;

  message: string;

  meta: TransactionListResponse.Meta;

  status: boolean;
}

export namespace TransactionListResponse {
  export interface Data {
    id: number;

    amount: number;

    authorization: Data.Authorization;

    channel: string;

    connect: unknown | null;

    created_at: string;

    createdAt: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    fees: number | null;

    fees_split: number | null;

    gateway_response: string;

    ip_address: string | null;

    log: Data.Log | null;

    message: unknown;

    metadata: unknown | null;

    order_id: unknown;

    paid_at: string | null;

    paidAt: string;

    plan: unknown;

    pos_transaction_data: unknown;

    reference: string;

    requested_amount: number;

    source: Data.Source | null;

    split: unknown;

    status: string;

    subaccount: unknown;
  }

  export namespace Data {
    export interface Authorization {
      account_name: string | null;

      authorization_code: string | null;

      bank: string | null;

      bin: string | null;

      brand: string | null;

      card_type: string | null;

      channel: string | null;

      country_code: string | null;

      exp_month: string | null;

      exp_year: string | null;

      last4: string | null;

      reusable: boolean;

      signature: string | null;
    }

    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string | null;

      last_name: string | null;

      metadata: unknown | null;

      phone: string | null;

      risk_action: string;
    }

    export interface Log {
      attempts: number;

      errors: number;

      history: Array<Log.History>;

      input: Array<unknown>;

      mobile: boolean;

      start_time: number;

      success: boolean;

      time_spent: number;
    }

    export namespace Log {
      export interface History {
        message: string;

        time: number;

        type: string;
      }
    }

    export interface Source {
      entry_point: string;

      identifier: unknown;

      source: string;

      type: string;
    }
  }

  export interface Meta {
    page: number;

    pageCount: number;

    perPage: string | number;

    skipped: number;

    total: number;

    total_volume: number;
  }
}

export interface TransactionChargeAuthorizationResponse {
  data: TransactionChargeAuthorizationResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransactionChargeAuthorizationResponse {
  export interface Data {
    id: number;

    amount: number;

    authorization: Data.Authorization;

    channel: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    fees: number | null;

    gateway_response: string;

    ip_address: unknown;

    log: Data.Log | null;

    message: string | null;

    metadata: string;

    plan: unknown;

    reference: string;

    status: string;

    transaction_date: string;
  }

  export namespace Data {
    export interface Authorization {
      account_name: unknown;

      authorization_code: string;

      bank: string;

      bin: string | null;

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

      first_name: string | null;

      international_format_phone: string | null;

      last_name: string | null;

      metadata: Customer.Metadata | null;

      phone: string | null;

      risk_action: string;
    }

    export namespace Customer {
      export interface Metadata {
        calling_code?: string;
      }
    }

    export interface Log {
      attempts: number;

      errors: number;

      history: Array<Log.History>;

      input: Array<unknown>;

      mobile: boolean;

      start_time: number;

      success: boolean;

      time_spent: number;
    }

    export namespace Log {
      export interface History {
        message: string;

        time: number;

        type: string;
      }
    }
  }
}

export interface TransactionExportResponse {
  data: TransactionExportResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransactionExportResponse {
  export interface Data {
    expiresAt: string;

    path: string;
  }
}

export interface TransactionFetchTimelineResponse {
  data: unknown;

  message: string;

  status: boolean;
}

export interface TransactionGetTotalsResponse {
  data: TransactionGetTotalsResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransactionGetTotalsResponse {
  export interface Data {
    pending_transfers: number;

    pending_transfers_by_currency: Array<Data.PendingTransfersByCurrency>;

    total_transactions: number;

    total_volume: number;

    total_volume_by_currency: Array<Data.TotalVolumeByCurrency>;
  }

  export namespace Data {
    export interface PendingTransfersByCurrency {
      amount: number;

      currency: string;
    }

    export interface TotalVolumeByCurrency {
      amount: number;

      currency: string;
    }
  }
}

export interface TransactionInitializeResponse {
  data: TransactionInitializeResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransactionInitializeResponse {
  export interface Data {
    access_code: string;

    authorization_url: string;

    reference: string;
  }
}

export interface TransactionPartialDebitResponse {
  data: TransactionPartialDebitResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransactionPartialDebitResponse {
  export interface Data {
    id: number;

    amount: number;

    authorization: Data.Authorization;

    channel: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    fees: number;

    gateway_response: string;

    ip_address: unknown;

    log: Data.Log | null;

    message: unknown;

    metadata: string;

    plan: number;

    reference: string;

    requested_amount: number;

    status: string;

    transaction_date: string;
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

      first_name: string | null;

      international_format_phone: string | null;

      last_name: string | null;

      metadata: unknown | null;

      phone: string | null;

      risk_action: string;
    }

    export interface Log {
      attempts: number;

      errors: number;

      history: Array<Log.History>;

      input: Array<unknown>;

      mobile: boolean;

      start_time: number;

      success: boolean;

      time_spent: number;
    }

    export namespace Log {
      export interface History {
        message: string;

        time: number;

        type: string;
      }
    }
  }
}

export interface TransactionVerifyResponse {
  data: TransactionVerifyResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransactionVerifyResponse {
  export interface Data {
    id: number;

    amount: number;

    authorization: Data.Authorization;

    channel: string;

    connect: unknown;

    created_at: string;

    createdAt: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    fees: number | null;

    fees_breakdown: unknown;

    fees_split: unknown;

    gateway_response: string;

    ip_address: string;

    log: Data.Log | null;

    message: string | null;

    metadata: string | unknown;

    order_id: unknown;

    paid_at: string | null;

    paidAt: string | null;

    plan: string | null;

    plan_object: Data.UnionMember0 | Data.UnionMember1;

    pos_transaction_data: unknown;

    receipt_number: string | null;

    reference: string;

    requested_amount: number;

    source: unknown;

    split: unknown;

    status: string;

    subaccount: unknown;

    transaction_date: string;
  }

  export namespace Data {
    export interface Authorization {
      account_name?: unknown;

      authorization_code?: string;

      bank?: string;

      bin?: unknown;

      brand?: string;

      card_type?: string;

      channel?: string;

      country_code?: string;

      exp_month?: string;

      exp_year?: string;

      last4?: string;

      receiver_bank?: unknown;

      receiver_bank_account_number?: unknown;

      reusable?: boolean;

      signature?: string;
    }

    export interface Customer {
      id: number;

      customer_code: string;

      email: string;

      first_name: string | null;

      international_format_phone: string | null;

      last_name: string | null;

      metadata: unknown;

      phone: string | null;

      risk_action: string;
    }

    export interface Log {
      attempts: number;

      errors: number;

      history: Array<Log.History>;

      input: Array<unknown>;

      mobile: boolean;

      start_time: number;

      success: boolean;

      time_spent: number;
    }

    export namespace Log {
      export interface History {
        message: string;

        time: number;

        type: string;
      }
    }

    export interface UnionMember0 {}

    export interface UnionMember1 {}
  }
}

export interface TransactionListParams {
  /**
   * Filter transactions by a specific amount
   */
  amount?: number;

  /**
   * The payment method the customer used to complete the transaction
   */
  channel?: 'card' | 'pos' | 'bank' | 'dedicated_nuban' | 'ussd' | 'bank_transfer';

  /**
   * Filter transactions by a customer code
   */
  customer_code?: string;

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
  page?: number;

  /**
   * The number of records to fetch per request
   */
  per_page?: number;

  /**
   * An alphanumeric value returned for every cursor based retrieval, used to
   * retrieve the previous set of data
   */
  previous?: string;

  /**
   * The settlement ID to filter for settled transactions
   */
  settlement?: number;

  /**
   * The origin of the payment
   */
  source?: 'merchantApi' | 'checkout' | 'pos' | 'virtualTerminal';

  /**
   * Filter transaction by split code
   */
  split_code?: string;

  /**
   * Filter transaction by status
   */
  status?: 'success' | 'failed' | 'abandoned' | 'reversed';

  /**
   * Filter transaction by subaccount code
   */
  subaccount_code?: string;

  /**
   * Filter transactions by a terminal ID
   */
  terminal_id?: string;

  /**
   * The end date
   */
  to?: string;

  /**
   * A flag to indicate if cursor based pagination should be used
   */
  use_cursor?: boolean;

  /**
   * Filter transactions by a virtual account number
   */
  virtual_account_number?: string;
}

export interface TransactionChargeAuthorizationParams {
  /**
   * Amount in the lower denomination of your currency
   */
  amount: number;

  /**
   * Valid authorization code to charge
   */
  authorization_code: string;

  /**
   * Customer's email address
   */
  email: string;

  /**
   * The bearer of the transaction charge
   */
  bearer?: 'account' | 'subaccount';

  /**
   * List of all support currencies
   */
  currency?: Currency;

  /**
   * Stringified JSON object of custom data
   */
  metadata?: string;

  /**
   * If you are making a scheduled charge call, it is a good idea to queue them so
   * the processing system does not get overloaded causing transaction processing
   * errors.
   */
  queue?: boolean;

  /**
   * Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
   */
  reference?: string;

  /**
   * Split configuration for transactions
   */
  split?: SplitAPI.SplitCreate;

  /**
   * The split code of the transaction split
   */
  split_code?: string;

  /**
   * The code for the subaccount that owns the payment
   */
  subaccount?: string;

  /**
   * A flat fee to charge the subaccount for a transaction. This overrides the split
   * percentage set when the subaccount was created
   */
  transaction_charge?: string;
}

export interface TransactionExportParams {
  /**
   * Filter by customer ID
   */
  customer?: number;

  /**
   * The start date
   */
  from?: string;

  /**
   * Filter by the settlement ID
   */
  settlement?: number;

  /**
   * Filter by the status of the transaction
   */
  status?: 'success' | 'failed' | 'abandoned' | 'reversed' | 'all';

  /**
   * Filter by subaccount code
   */
  subaccount_code?: string;

  /**
   * The end date
   */
  to?: string;
}

export interface TransactionGetTotalsParams {
  /**
   * The start date
   */
  from?: string;

  /**
   * The end date
   */
  to?: string;
}

export interface TransactionInitializeParams {
  /**
   * Amount should be in smallest denomination of the currency.
   */
  amount: number;

  /**
   * Customer's email address
   */
  email: string;

  /**
   * The bearer of the transaction charge
   */
  bearer?: 'account' | 'subaccount';

  /**
   * Fully qualified url, e.g. https://example.com/ to redirect your customers to
   * after a successful payment. Use this to override the callback url provided on
   * the dashboard for this transaction
   */
  callback_url?: string;

  /**
   * An array of payment channels to control what channels you want to make available
   * to the user to make a payment with
   */
  channels?: Array<'card' | 'bank' | 'ussd' | 'qr' | 'eft' | 'mobile_money' | 'bank_transfer'>;

  /**
   * List of all support currencies
   */
  currency?: Currency;

  /**
   * Number of times to charge customer during subscription to plan
   */
  invoice_limit?: number;

  /**
   * Used to replace the email address shown on the Checkout
   */
  label?: string;

  /**
   * JSON object of custom data
   */
  metadata?: unknown;

  /**
   * If transaction is to create a subscription to a predefined plan, provide plan
   * code here. This would invalidate the value provided in amount
   */
  plan?: string;

  /**
   * Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
   */
  reference?: string;

  /**
   * Split configuration for transactions
   */
  split?: SplitAPI.SplitCreate;

  /**
   * The split code of the transaction split
   */
  split_code?: string;

  /**
   * The code for the subaccount that owns the payment
   */
  subaccount?: string;

  /**
   * A flat fee to charge the subaccount for a transaction. This overrides the split
   * percentage set when the subaccount was created
   */
  transaction_charge?: string;
}

export interface TransactionPartialDebitParams {
  /**
   * Specified in the lowest denomination of your currency
   */
  amount: number;

  /**
   * Valid authorization code to charge
   */
  authorization_code: string;

  /**
   * List of all support currencies
   */
  currency: Currency;

  /**
   * Customer's email address
   */
  email: string;

  /**
   * Minimum amount to charge
   */
  at_least?: string;

  /**
   * Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
   */
  reference?: string;
}

export declare namespace Transaction {
  export {
    type Currency as Currency,
    type MetadataCustomFields as MetadataCustomFields,
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionChargeAuthorizationResponse as TransactionChargeAuthorizationResponse,
    type TransactionExportResponse as TransactionExportResponse,
    type TransactionFetchTimelineResponse as TransactionFetchTimelineResponse,
    type TransactionGetTotalsResponse as TransactionGetTotalsResponse,
    type TransactionInitializeResponse as TransactionInitializeResponse,
    type TransactionPartialDebitResponse as TransactionPartialDebitResponse,
    type TransactionVerifyResponse as TransactionVerifyResponse,
    type TransactionListParams as TransactionListParams,
    type TransactionChargeAuthorizationParams as TransactionChargeAuthorizationParams,
    type TransactionExportParams as TransactionExportParams,
    type TransactionGetTotalsParams as TransactionGetTotalsParams,
    type TransactionInitializeParams as TransactionInitializeParams,
    type TransactionPartialDebitParams as TransactionPartialDebitParams,
  };
}
