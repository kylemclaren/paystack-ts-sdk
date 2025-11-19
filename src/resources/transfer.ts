// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transfer extends APIResource {
  /**
   * List the transfers made on your integration
   *
   * @example
   * ```ts
   * const transfers = await client.transfer.list();
   * ```
   */
  list(
    query: TransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransferListResponse> {
    return this._client.get('/transfer', { query, ...options });
  }

  /**
   * This is used in the event that you want to be able to complete transfers
   * programmatically without use of OTPs. No arguments required. You will get an OTP
   * to complete the request.
   *
   * @example
   * ```ts
   * const response = await client.transfer.disableOtp();
   * ```
   */
  disableOtp(options?: RequestOptions): APIPromise<TransferDisableOtpResponse> {
    return this._client.post('/transfer/disable_otp', options);
  }

  /**
   * In the event that a customer wants to stop being able to complete transfers
   * programmatically, this endpoint helps turn OTP requirement back on. No arguments
   * required.
   *
   * @example
   * ```ts
   * const response = await client.transfer.enableOtp();
   * ```
   */
  enableOtp(options?: RequestOptions): APIPromise<TransferEnableOtpResponse> {
    return this._client.post('/transfer/enable_otp', options);
  }

  /**
   * Export a list of transfers carried out on your integration
   *
   * @example
   * ```ts
   * const response = await client.transfer.export();
   * ```
   */
  export(
    query: TransferExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransferExportResponse> {
    return this._client.get('/transfer/export', { query, ...options });
  }

  /**
   * Get details of a transfer on your integration
   *
   * @example
   * ```ts
   * const response = await client.transfer.fetch(
   *   'TRF_1ptvuv321ahaa7q',
   * );
   * ```
   */
  fetch(code: string, options?: RequestOptions): APIPromise<TransferFetchResponse> {
    return this._client.get(path`/transfer/${code}`, options);
  }

  /**
   * Finalize an initiated transfer
   *
   * @example
   * ```ts
   * const response = await client.transfer.finalize({
   *   otp: '928783',
   *   transfer_code: 'TRF_vsyqdmlzble3uii',
   * });
   * ```
   */
  finalize(body: TransferFinalizeParams, options?: RequestOptions): APIPromise<TransferFinalizeResponse> {
    return this._client.post('/transfer/finalize_transfer', { body, ...options });
  }

  /**
   * Finalize the request to disable OTP on your transfers
   *
   * @example
   * ```ts
   * const response = await client.transfer.finalizeDisableOtp({
   *   otp: '928783',
   * });
   * ```
   */
  finalizeDisableOtp(
    body: TransferFinalizeDisableOtpParams,
    options?: RequestOptions,
  ): APIPromise<TransferFinalizeDisableOtpResponse> {
    return this._client.post('/transfer/disable_otp_finalize', { body, ...options });
  }

  /**
   * Send money to your customers
   *
   * @example
   * ```ts
   * const response = await client.transfer.initiate({
   *   amount: 0,
   *   recipient: 'recipient',
   *   reference: 'reference',
   *   source: 'source',
   * });
   * ```
   */
  initiate(body: TransferInitiateParams, options?: RequestOptions): APIPromise<TransferInitiateResponse> {
    return this._client.post('/transfer', { body, ...options });
  }

  /**
   * Batch multiple transfers in a single request.
   *
   * You need to disable the Transfers OTP requirement to use this endpoint.
   *
   * @example
   * ```ts
   * const response = await client.transfer.initiateBulk({
   *   source: 'balance',
   *   transfers: [
   *     {
   *       amount: 120000,
   *       recipient: 'RCP_gd9vgag7n5lr5ix',
   *       reference: 'acv_9ee55786-2323-4760-98e2-6380c9cb3f68',
   *     },
   *   ],
   * });
   * ```
   */
  initiateBulk(
    body: TransferInitiateBulkParams,
    options?: RequestOptions,
  ): APIPromise<TransferInitiateBulkResponse> {
    return this._client.post('/transfer/bulk', { body, ...options });
  }

  /**
   * Generates and send a new OTP to customer in the event they are having trouble
   * receiving one.
   *
   * @example
   * ```ts
   * const response = await client.transfer.resendOtp({
   *   reason: 'resend_otp',
   *   transfer_code: 'TRF_vsyqdmlzble3uii',
   * });
   * ```
   */
  resendOtp(body: TransferResendOtpParams, options?: RequestOptions): APIPromise<TransferResendOtpResponse> {
    return this._client.post('/transfer/resend_otp', { body, ...options });
  }

  /**
   * Verify the status of a transfer on your integration
   *
   * @example
   * ```ts
   * const response = await client.transfer.verify(
   *   'acv_9ee55786-2323-4760-98e2-6380c9cb3f67',
   * );
   * ```
   */
  verify(reference: string, options?: RequestOptions): APIPromise<TransferVerifyResponse> {
    return this._client.get(path`/transfer/verify/${reference}`, options);
  }
}

export interface TransferBase {
  /**
   * Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS.
   */
  amount: number;

  /**
   * The transfer recipient's code
   */
  recipient: string;

  /**
   * To ensure idempotency, you need to provide e a unique identifier for the
   * request. The identifier should be a lowercase alphanumeric string with only -,\_
   * symbols allowed.
   */
  reference: string;

  /**
   * The reason or narration for the transfer.
   */
  reason?: string;
}

export interface TransferListResponse {
  data: Array<TransferListResponse.Data>;

  message: string;

  meta: TransferListResponse.Meta;

  status: boolean;
}

export namespace TransferListResponse {
  export interface Data {
    id: number;

    amount: number;

    createdAt: string;

    currency: string;

    domain: string;

    failures: unknown;

    fee_charged: number;

    fees_breakdown: number | null;

    integration: number;

    reason: string;

    recipient: Data.Recipient;

    reference: string;

    request: number;

    session: Data.Session;

    source: string;

    source_details: unknown;

    status: string;

    titan_code: unknown;

    transfer_code: string;

    transferred_at: unknown;

    updatedAt: string;
  }

  export namespace Data {
    export interface Recipient {
      id: number;

      active: boolean;

      createdAt: string;

      currency: string;

      description: string;

      details: Recipient.Details;

      domain: string;

      email: string;

      integration: number;

      is_deleted: boolean;

      isDeleted: boolean;

      name: string;

      recipient_code: string;

      type: string;

      updatedAt: string;

      metadata?: unknown | null;
    }

    export namespace Recipient {
      export interface Details {
        account_name: string | null;

        account_number: string;

        authorization_code: unknown;

        bank_code: string;

        bank_name: string;
      }
    }

    export interface Session {
      id: unknown;

      provider: unknown;
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

export interface TransferDisableOtpResponse {
  message: string;

  status: boolean;
}

export interface TransferEnableOtpResponse {
  message: string;

  status: boolean;
}

export interface TransferExportResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface TransferFetchResponse {
  data: TransferFetchResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransferFetchResponse {
  export interface Data {
    id: number;

    amount: number;

    createdAt: string;

    currency: string;

    domain: string;

    failures: unknown;

    fee_charged: number;

    fees_breakdown: Array<Data.FeesBreakdown> | null;

    gateway_response: string | null;

    integration: number;

    reason: string;

    recipient: Data.Recipient;

    reference: string;

    request: number;

    session: Data.Session;

    source: string;

    source_details: unknown;

    status: string;

    titan_code: unknown;

    transfer_code: string;

    transferred_at: unknown;

    updatedAt: string;
  }

  export namespace Data {
    export interface FeesBreakdown {
      amount: string;

      formula: unknown;

      type: string;
    }

    export interface Recipient {
      id: number;

      active: boolean;

      createdAt: string;

      currency: string;

      description: string;

      details: Recipient.Details;

      domain: string;

      email: string;

      integration: number;

      is_deleted: boolean;

      isDeleted: boolean;

      name: string;

      recipient_code: string;

      type: string;

      updatedAt: string;

      metadata?: unknown | null;
    }

    export namespace Recipient {
      export interface Details {
        account_name: string | null;

        account_number: string;

        authorization_code: unknown;

        bank_code: string;

        bank_name: string;
      }
    }

    export interface Session {
      id: unknown;

      provider: unknown;
    }
  }
}

export interface TransferFinalizeResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface TransferFinalizeDisableOtpResponse {
  message: string;

  status: boolean;
}

export interface TransferInitiateResponse {
  data: TransferInitiateResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransferInitiateResponse {
  export interface Data {
    id: number;

    amount: number;

    createdAt: string;

    currency: string;

    domain: string;

    failures: unknown;

    integration: number;

    reason: string;

    recipient: number;

    reference: string;

    request: number;

    source: string;

    source_details: unknown;

    status: string;

    titan_code: unknown;

    transfer_code: string;

    transferred_at: unknown;

    transfersessionid: Array<unknown>;

    transfertrials: Array<unknown>;

    updatedAt: string;
  }
}

export interface TransferInitiateBulkResponse {
  data: Array<TransferInitiateBulkResponse.Data>;

  message: string;

  status: boolean;
}

export namespace TransferInitiateBulkResponse {
  export interface Data {
    amount: number;

    currency: string;

    recipient: string;

    reference: string;

    status: string;

    transfer_code: string;
  }
}

export interface TransferResendOtpResponse {
  message: string;

  status: boolean;
}

export interface TransferVerifyResponse {
  data: TransferVerifyResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransferVerifyResponse {
  export interface Data {
    id: number;

    amount: number;

    createdAt: string;

    currency: string;

    domain: string;

    failures: unknown;

    gateway_response: string | null;

    integration: number;

    reason: string;

    recipient: Data.Recipient;

    reference: string;

    session: Data.Session;

    source: string;

    source_details: unknown;

    status: string;

    titan_code: unknown;

    transfer_code: string;

    transferred_at: unknown;

    updatedAt: string;
  }

  export namespace Data {
    export interface Recipient {
      id: number;

      active: boolean;

      createdAt: string;

      currency: string;

      description: string;

      details: Recipient.Details;

      domain: string;

      email: string;

      integration: number;

      is_deleted: boolean;

      name: string;

      recipient_code: string;

      type: string;

      updatedAt: string;

      metadata?: unknown | null;
    }

    export namespace Recipient {
      export interface Details {
        account_name: string;

        account_number: string;

        authorization_code: unknown;

        bank_code: string;

        bank_name: string;
      }
    }

    export interface Session {
      id: unknown;

      provider: unknown;
    }
  }
}

export interface TransferListParams {
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
   * Filter transfer by the recipient code
   */
  recipient?: string;

  /**
   * Filter transfer by status
   */
  status?:
    | 'pending'
    | 'success'
    | 'failed'
    | 'otp'
    | 'abandoned'
    | 'reversed'
    | 'blocked'
    | 'rejected'
    | 'received';

  /**
   * The end date
   */
  to?: string;

  /**
   * A flag to indicate if cursor based pagination should be used
   */
  use_cursor?: boolean;
}

export interface TransferExportParams {
  /**
   * The start date
   */
  from?: string;

  /**
   * Export transfer by the recipient code
   */
  recipient?: string;

  /**
   * Export transfer by status
   */
  status?:
    | 'pending'
    | 'success'
    | 'failed'
    | 'otp'
    | 'abandoned'
    | 'reversed'
    | 'blocked'
    | 'rejected'
    | 'received';

  /**
   * The end date
   */
  to?: string;
}

export interface TransferFinalizeParams {
  /**
   * OTP sent to business phone to verify transfer
   */
  otp: string;

  /**
   * The transfer code you want to finalize
   */
  transfer_code: string;
}

export interface TransferFinalizeDisableOtpParams {
  /**
   * OTP sent to business phone to verify disabling OTP requirement
   */
  otp: string;
}

export interface TransferInitiateParams {
  /**
   * Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS.
   */
  amount: number;

  /**
   * The transfer recipient's code
   */
  recipient: string;

  /**
   * To ensure idempotency, you need to provide e a unique identifier for the
   * request. The identifier should be a lowercase alphanumeric string with only -,\_
   * symbols allowed.
   */
  reference: string;

  /**
   * The source of funds to send from
   */
  source: string;

  /**
   * Specify the currency of the transfer.
   */
  currency?: 'NGN' | 'ZAR' | 'KES' | 'GHS';

  /**
   * The reason or narration for the transfer.
   */
  reason?: string;
}

export interface TransferInitiateBulkParams {
  /**
   * The source of funds for the transfer.
   */
  source: string;

  /**
   * A list of transfer object
   */
  transfers: Array<TransferBase>;

  /**
   * Specify the currency of the transfer.
   */
  currency?: 'NGN' | 'ZAR' | 'KES' | 'GHS';
}

export interface TransferResendOtpParams {
  /**
   * Specify the flag to indicate the purpose of the OTP
   */
  reason: 'disable_otp' | 'resend_otp' | 'transfer';

  /**
   * The transfer code that requires an OTP validation
   */
  transfer_code: string;
}

export declare namespace Transfer {
  export {
    type TransferBase as TransferBase,
    type TransferListResponse as TransferListResponse,
    type TransferDisableOtpResponse as TransferDisableOtpResponse,
    type TransferEnableOtpResponse as TransferEnableOtpResponse,
    type TransferExportResponse as TransferExportResponse,
    type TransferFetchResponse as TransferFetchResponse,
    type TransferFinalizeResponse as TransferFinalizeResponse,
    type TransferFinalizeDisableOtpResponse as TransferFinalizeDisableOtpResponse,
    type TransferInitiateResponse as TransferInitiateResponse,
    type TransferInitiateBulkResponse as TransferInitiateBulkResponse,
    type TransferResendOtpResponse as TransferResendOtpResponse,
    type TransferVerifyResponse as TransferVerifyResponse,
    type TransferListParams as TransferListParams,
    type TransferExportParams as TransferExportParams,
    type TransferFinalizeParams as TransferFinalizeParams,
    type TransferFinalizeDisableOtpParams as TransferFinalizeDisableOtpParams,
    type TransferInitiateParams as TransferInitiateParams,
    type TransferInitiateBulkParams as TransferInitiateBulkParams,
    type TransferResendOtpParams as TransferResendOtpParams,
  };
}
