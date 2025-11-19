// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DisputeAPI from './dispute';
import * as TransactionAPI from './transaction';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Dispute extends APIResource {
  /**
   * Fetch a transaction dispute
   *
   * @example
   * ```ts
   * const dispute = await client.dispute.retrieve(1801929);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<DisputeRetrieveResponse> {
    return this._client.get(path`/dispute/${id}`, options);
  }

  /**
   * Update a transaction dispute
   *
   * @example
   * ```ts
   * const dispute = await client.dispute.update(1801929, {
   *   refund_amount: 50000,
   * });
   * ```
   */
  update(id: number, body: DisputeUpdateParams, options?: RequestOptions): APIPromise<DisputeUpdateResponse> {
    return this._client.put(path`/dispute/${id}`, { body, ...options });
  }

  /**
   * List transaction disputes filed by customers
   *
   * @example
   * ```ts
   * const disputes = await client.dispute.list();
   * ```
   */
  list(
    query: DisputeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DisputeListResponse> {
    return this._client.get('/dispute', { query, ...options });
  }

  /**
   * Provide evidence for a dispute
   *
   * @example
   * ```ts
   * const response = await client.dispute.addEvidence(
   *   4734583785,
   *   {
   *     customer_email: 'customer@email.com',
   *     customer_name: 'Mensah King',
   *     customer_phone: '08012345678',
   *     service_details: 'claim for buying cups',
   *   },
   * );
   * ```
   */
  addEvidence(
    id: number,
    body: DisputeAddEvidenceParams,
    options?: RequestOptions,
  ): APIPromise<DisputeAddEvidenceResponse> {
    return this._client.post(path`/dispute/${id}/evidence`, { body, ...options });
  }

  /**
   * Export the disputes available on your integration
   *
   * @example
   * ```ts
   * const response = await client.dispute.export();
   * ```
   */
  export(
    query: DisputeExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DisputeExportResponse> {
    return this._client.get('/dispute/export', { query, ...options });
  }

  /**
   * Get the URL to upload a dispute evidence
   *
   * @example
   * ```ts
   * const response = await client.dispute.fetchUploadURL(
   *   4734583785,
   * );
   * ```
   */
  fetchUploadURL(id: number, options?: RequestOptions): APIPromise<DisputeFetchUploadURLResponse> {
    return this._client.get(path`/dispute/${id}/upload_url`, options);
  }

  /**
   * List all disputes filed for a transaction
   *
   * @example
   * ```ts
   * const response =
   *   await client.dispute.listTransactionDisputes(4734583785);
   * ```
   */
  listTransactionDisputes(
    id: number,
    options?: RequestOptions,
  ): APIPromise<DisputeListTransactionDisputesResponse> {
    return this._client.get(path`/dispute/transaction/${id}`, options);
  }

  /**
   * Resolve a transaction dispute
   *
   * @example
   * ```ts
   * const response = await client.dispute.resolve(4734583785, {
   *   message: 'Merchant accepted',
   *   refund_amount: 50000,
   *   resolution: 'merchant-accepted',
   *   uploaded_filename: 'qesp8a4df1xejihd9x5q',
   * });
   * ```
   */
  resolve(
    id: number,
    body: DisputeResolveParams,
    options?: RequestOptions,
  ): APIPromise<DisputeResolveResponse> {
    return this._client.put(path`/dispute/${id}/resolve`, { body, ...options });
  }
}

export interface DisputeHistoryArray {
  by: string;

  createdAt: string;

  status: string;
}

export interface DisputeMessagesArray {
  body: string;

  createdAt: string;

  sender: string;
}

export interface DisputeRetrieveResponse {
  data: DisputeRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace DisputeRetrieveResponse {
  export interface Data {
    id: number;

    attachments: unknown;

    bin: string;

    category: string;

    createdAt: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    dueAt: unknown;

    evidence: unknown;

    history: Array<DisputeAPI.DisputeHistoryArray>;

    last4: string;

    messages: Array<DisputeAPI.DisputeMessagesArray>;

    note: unknown;

    refund_amount: number;

    resolution: unknown;

    resolvedAt: unknown;

    status: string;

    transaction: Data.Transaction;

    transaction_reference: unknown;

    updatedAt: string;
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

    export interface Transaction {
      id: number;

      amount: number;

      authorization: Transaction.Authorization;

      channel: string;

      connect: unknown;

      created_at: string;

      createdAt: string;

      currency: string;

      customer: Transaction.Customer;

      domain: string;

      fees: number;

      fees_breakdown: unknown;

      fees_split: number | null;

      gateway_response: string;

      ip_address: string;

      log: Transaction.Log | null;

      message: unknown;

      metadata: Transaction.Metadata;

      order_id: unknown;

      paid_at: string;

      paidAt: string;

      plan: unknown;

      pos_transaction_data: unknown;

      reference: string;

      requested_amount: number;

      source: unknown;

      split: unknown;

      status: string;

      subaccount: unknown;

      receipt_number?: number | null;
    }

    export namespace Transaction {
      export interface Authorization {
        receiver_bank: unknown;

        receiver_bank_account_number: unknown;
      }

      export interface Customer {
        international_format_phone: unknown;
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
    }
  }
}

export interface DisputeUpdateResponse {
  data: DisputeUpdateResponse.Data;

  message: string;

  status: boolean;
}

export namespace DisputeUpdateResponse {
  export interface Data {
    id: number;

    attachments: unknown;

    bin: string;

    category: string;

    createdAt: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    dueAt: unknown;

    evidence: unknown;

    history: Array<DisputeAPI.DisputeHistoryArray>;

    last4: string;

    messages: Array<DisputeAPI.DisputeMessagesArray>;

    note: unknown;

    refund_amount: number;

    resolution: unknown;

    resolvedAt: unknown;

    status: string;

    transaction: Data.Transaction;

    transaction_reference: unknown;

    updatedAt: string;
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

    export interface Transaction {
      id: number;

      amount: number;

      authorization: Transaction.Authorization;

      channel: string;

      connect: unknown;

      created_at: string;

      createdAt: string;

      currency: string;

      customer: Transaction.Customer;

      domain: string;

      fees: number;

      fees_breakdown: unknown;

      fees_split: number | null;

      gateway_response: string;

      ip_address: string;

      log: Transaction.Log | null;

      message: unknown;

      metadata: Transaction.Metadata;

      order_id: unknown;

      paid_at: string;

      paidAt: string;

      plan: unknown;

      pos_transaction_data: unknown;

      reference: string;

      requested_amount: number;

      source: unknown;

      split: unknown;

      status: string;

      subaccount: unknown;

      receipt_number?: number | null;
    }

    export namespace Transaction {
      export interface Authorization {
        receiver_bank: unknown;

        receiver_bank_account_number: unknown;
      }

      export interface Customer {
        international_format_phone: unknown;
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
    }
  }
}

export interface DisputeListResponse {
  data: Array<DisputeListResponse.Data>;

  message: string;

  meta: DisputeListResponse.Meta;

  status: boolean;
}

export namespace DisputeListResponse {
  export interface Data {
    id: number;

    attachments: unknown;

    bin: string;

    category: string;

    createdAt: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    dueAt: unknown;

    evidence: unknown;

    history: Array<DisputeAPI.DisputeHistoryArray>;

    last4: string;

    messages: Array<DisputeAPI.DisputeMessagesArray>;

    note: unknown;

    refund_amount: number;

    resolution: unknown;

    resolvedAt: unknown;

    status: string;

    transaction: Data.Transaction;

    transaction_reference: unknown;

    updatedAt: string;
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

    export interface Transaction {
      id: number;

      amount: number;

      authorization: unknown;

      channel: string;

      connect: unknown;

      created_at: string;

      createdAt: string;

      currency: string;

      customer: unknown;

      domain: string;

      fees: number;

      fees_breakdown: unknown;

      fees_split: number | null;

      gateway_response: string;

      ip_address: string;

      log: Transaction.Log | null;

      message: unknown;

      metadata: Transaction.Metadata;

      order_id: unknown;

      paid_at: string;

      paidAt: string;

      plan: unknown;

      pos_transaction_data: unknown;

      reference: string;

      source: unknown;

      split: unknown;

      status: string;

      subaccount: unknown;
    }

    export namespace Transaction {
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

export interface DisputeAddEvidenceResponse {
  data: DisputeAddEvidenceResponse.Data;

  message: string;

  status: boolean;
}

export namespace DisputeAddEvidenceResponse {
  export interface Data {
    id: number;

    createdAt: string;

    customer_email: string;

    customer_name: string;

    customer_phone: string;

    delivery_address: string;

    delivery_date: string;

    dispute: number;

    service_details: string;

    updatedAt: string;
  }
}

export interface DisputeExportResponse {
  data: DisputeExportResponse.Data;

  message: string;

  status: boolean;
}

export namespace DisputeExportResponse {
  export interface Data {
    expiresAt: string;

    path: string;
  }
}

export interface DisputeFetchUploadURLResponse {
  data: DisputeFetchUploadURLResponse.Data;

  message: string;

  status: boolean;
}

export namespace DisputeFetchUploadURLResponse {
  export interface Data {
    fileName: string;

    signedUrl: string;
  }
}

export interface DisputeListTransactionDisputesResponse {
  data: DisputeListTransactionDisputesResponse.Data;

  message: string;

  status: boolean;
}

export namespace DisputeListTransactionDisputesResponse {
  export interface Data {
    id: number;

    attachments: unknown;

    bin: string;

    category: string;

    created_by: number;

    createdAt: string;

    currency: string;

    domain: string;

    dueAt: unknown;

    evidence: unknown;

    history: Array<DisputeAPI.DisputeHistoryArray>;

    integration: number;

    last4: string;

    merchant_transaction_reference: string;

    messages: Array<DisputeAPI.DisputeMessagesArray>;

    note: unknown;

    refund_amount: number;

    resolution: unknown;

    resolvedAt: unknown;

    status: string;

    transaction: Data.Transaction;

    transaction_reference: unknown;

    updatedAt: string;
  }

  export namespace Data {
    export interface Transaction {
      id: number;

      amount: number;

      authorization: Transaction.Authorization;

      channel: string;

      connect: unknown | null;

      created_at: string;

      createdAt: string;

      currency: string;

      customer: Transaction.Customer;

      domain: string;

      fees: number;

      fees_breakdown: unknown;

      fees_split: number | null;

      gateway_response: string;

      ip_address: string;

      log: Transaction.Log | null;

      message: unknown;

      metadata: Transaction.Metadata;

      order_id: unknown;

      paid_at: string;

      paidAt: string;

      plan: unknown;

      pos_transaction_data: unknown;

      reference: string;

      requested_amount: number;

      source: unknown;

      split: unknown;

      status: string;

      subaccount: unknown;

      receipt_number?: number | null;
    }

    export namespace Transaction {
      export interface Authorization {
        receiver_bank: unknown;

        receiver_bank_account_number: unknown;
      }

      export interface Customer {
        international_format_phone: unknown;
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
    }
  }
}

export interface DisputeResolveResponse {
  data: DisputeResolveResponse.Data;

  message: string;

  status: boolean;
}

export namespace DisputeResolveResponse {
  export interface Data {
    id: number;

    attachments: string;

    bin: string;

    category: string;

    created_by: number;

    createdAt: string;

    currency: string;

    domain: string;

    dueAt: unknown;

    evidence: number;

    integration: number;

    last4: string;

    merchant_transaction_reference: string;

    message: Data.Message;

    note: unknown;

    refund_amount: number;

    resolution: string;

    resolvedAt: string;

    status: string;

    transaction: number;

    transaction_reference: unknown;

    updatedAt: string;
  }

  export namespace Data {
    export interface Message {
      id: number;

      body: string;

      createdAt: string;

      dispute: number;

      sender: string;

      updatedAt: string;
    }
  }
}

export interface DisputeUpdateParams {
  /**
   * The amount to refund, in the subunit of your currency
   */
  refund_amount: number;

  /**
   * Filename of attachment returned via response from the Dispute upload URL
   */
  uploaded_filename?: string;
}

export interface DisputeListParams {
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
   * Dispute status
   */
  status?: 'awaiting-merchant-feedback' | 'awaiting-bank-feedback' | 'pending' | 'resolved';

  /**
   * The end date
   */
  to?: string;

  /**
   * Transaction ID
   */
  transaction?: string;
}

export interface DisputeAddEvidenceParams {
  /**
   * Customer email
   */
  customer_email: string;

  /**
   * Customer name
   */
  customer_name: string;

  /**
   * Customer mobile number
   */
  customer_phone: string;

  /**
   * Details of service offered
   */
  service_details: string;

  /**
   * Delivery address
   */
  delivery_address?: string;

  /**
   * ISO 8601 representation of delivery date (YYYY-MM-DD)
   */
  delivery_date?: string;
}

export interface DisputeExportParams {
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

  status?: 'awaiting-merchant-feedback' | 'awaiting-bank-feedback' | 'pending' | 'resolved';

  /**
   * The end date
   */
  to?: string;
}

export interface DisputeResolveParams {
  /**
   * Reason for resolving
   */
  message: string;

  /**
   * The amount to refund, in the subunit of your integration currency
   */
  refund_amount: number;

  /**
   * Dispute resolution. Accepted values, merchant-accepted, declined
   */
  resolution: string;

  /**
   * Filename of attachment returned via response from the Dispute upload URL
   */
  uploaded_filename: string;

  /**
   * Evidence Id for fraud claims
   */
  evidence?: number;
}

export declare namespace Dispute {
  export {
    type DisputeHistoryArray as DisputeHistoryArray,
    type DisputeMessagesArray as DisputeMessagesArray,
    type DisputeRetrieveResponse as DisputeRetrieveResponse,
    type DisputeUpdateResponse as DisputeUpdateResponse,
    type DisputeListResponse as DisputeListResponse,
    type DisputeAddEvidenceResponse as DisputeAddEvidenceResponse,
    type DisputeExportResponse as DisputeExportResponse,
    type DisputeFetchUploadURLResponse as DisputeFetchUploadURLResponse,
    type DisputeListTransactionDisputesResponse as DisputeListTransactionDisputesResponse,
    type DisputeResolveResponse as DisputeResolveResponse,
    type DisputeUpdateParams as DisputeUpdateParams,
    type DisputeListParams as DisputeListParams,
    type DisputeAddEvidenceParams as DisputeAddEvidenceParams,
    type DisputeExportParams as DisputeExportParams,
    type DisputeResolveParams as DisputeResolveParams,
  };
}
