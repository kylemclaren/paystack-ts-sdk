// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transferrecipient extends APIResource {
  /**
   * Creates a new recipient. A duplicate account number will lead to the retrieval
   * of the existing record.
   *
   * @example
   * ```ts
   * const transferrecipient =
   *   await client.transferrecipient.create({
   *     account_number: '01000000010',
   *     bank_code: '058',
   *     name: 'Smith Taplo',
   *     type: 'nuban',
   *   });
   * ```
   */
  create(
    body: TransferrecipientCreateParams,
    options?: RequestOptions,
  ): APIPromise<TransferrecipientCreateResponse> {
    return this._client.post('/transferrecipient', { body, ...options });
  }

  /**
   * Fetch the details of a transfer recipient
   *
   * @example
   * ```ts
   * const transferrecipient =
   *   await client.transferrecipient.retrieve(
   *     'RCP_5ap8rcimmcj8lbi',
   *   );
   * ```
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<TransferrecipientRetrieveResponse> {
    return this._client.get(path`/transferrecipient/${code}`, options);
  }

  /**
   * Update the details of a transfer recipient
   *
   * @example
   * ```ts
   * const transferrecipient =
   *   await client.transferrecipient.update(
   *     'RCP_5ap8rcimmcj8lbi',
   *   );
   * ```
   */
  update(
    code: string,
    body: TransferrecipientUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransferrecipientUpdateResponse> {
    return this._client.put(path`/transferrecipient/${code}`, { body, ...options });
  }

  /**
   * List transfer recipients available on your integration
   *
   * @example
   * ```ts
   * const transferrecipients =
   *   await client.transferrecipient.list();
   * ```
   */
  list(
    query: TransferrecipientListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransferrecipientListResponse> {
    return this._client.get('/transferrecipient', { query, ...options });
  }

  /**
   * Delete a transfer recipient (sets the transfer recipient to inactive)
   *
   * @example
   * ```ts
   * const transferrecipient =
   *   await client.transferrecipient.delete(
   *     'RCP_5ap8rcimmcj8lbi',
   *   );
   * ```
   */
  delete(code: string, options?: RequestOptions): APIPromise<TransferrecipientDeleteResponse> {
    return this._client.delete(path`/transferrecipient/${code}`, options);
  }

  /**
   * Create multiple transfer recipients in batches. A duplicate account number will
   * lead to the retrieval of the existing record.
   *
   * @example
   * ```ts
   * const response = await client.transferrecipient.createBulk({
   *   batch: [
   *     {
   *       account_number: '01000000010',
   *       bank_code: '058',
   *       name: 'Smith Taplo',
   *       type: 'nuban',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(
    body: TransferrecipientCreateBulkParams,
    options?: RequestOptions,
  ): APIPromise<TransferrecipientCreateBulkResponse> {
    return this._client.post('/transferrecipient/bulk', { body, ...options });
  }
}

export interface TransferRecipientCreate {
  /**
   * Recipient's bank account number
   */
  account_number: string;

  /**
   * Recipient's bank code. You can get the list of Bank Codes by calling the List
   * Banks endpoint
   */
  bank_code: string;

  /**
   * The recipient's name according to their account registration.
   */
  name: string;

  /**
   * Recipient Type
   */
  type: 'nuban' | 'ghipss' | 'mobile_money' | 'basa' | 'authorization';

  /**
   * An authorization code from a previous transaction
   */
  authorization_code?: string;

  /**
   * Currency for the account receiving the transfer
   */
  currency?: string;

  /**
   * A description for this recipient
   */
  description?: string;

  /**
   * JSON object of custom data
   */
  metadata?: unknown;
}

export interface TransferrecipientCreateResponse {
  data: TransferrecipientCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransferrecipientCreateResponse {
  export interface Data {
    id: number;

    active: boolean;

    createdAt: string;

    currency: string;

    description: string;

    details: Data.Details;

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

  export namespace Data {
    export interface Details {
      account_name: string | null;

      account_number: string | null;

      authorization_code: string | null;

      bank_code: string;

      bank_name: string;
    }
  }
}

export interface TransferrecipientRetrieveResponse {
  data: TransferrecipientRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransferrecipientRetrieveResponse {
  export interface Data {
    id: number;

    active: boolean;

    createdAt: string;

    currency: string;

    description: string;

    details: Data.Details;

    domain: string;

    email: string;

    institution_code: string;

    integration: number;

    isDeleted: boolean;

    name: string;

    recipient_account: string;

    recipient_code: string;

    type: string;

    updatedAt: string;

    metadata?: unknown | null;
  }

  export namespace Data {
    export interface Details {
      account_name: string | null;

      account_number: string | null;

      bank_code: string;

      bank_name: string;
    }
  }
}

export interface TransferrecipientUpdateResponse {
  message: string;

  status: boolean;
}

export interface TransferrecipientListResponse {
  data: Array<TransferrecipientListResponse.Data>;

  message: string;

  meta: TransferrecipientListResponse.Meta;

  status: boolean;
}

export namespace TransferrecipientListResponse {
  export interface Data {
    id: number;

    active: boolean;

    createdAt: string;

    currency: string;

    description: string;

    details: Data.Details;

    domain: string;

    email: string | null;

    integration: number;

    is_deleted: boolean;

    isDeleted: boolean;

    name: string;

    recipient_code: string;

    type: string;

    updatedAt: string;

    metadata?: unknown | null;
  }

  export namespace Data {
    export interface Details {
      account_name: string | null;

      account_number: string | null;

      authorization_code: string | null;

      bank_code: string;

      bank_name: string;
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

export interface TransferrecipientDeleteResponse {
  message: string;

  status: boolean;
}

export interface TransferrecipientCreateBulkResponse {
  data: TransferrecipientCreateBulkResponse.Data;

  message: string;

  status: boolean;
}

export namespace TransferrecipientCreateBulkResponse {
  export interface Data {
    errors: Array<Data.Error>;

    success: Array<unknown>;
  }

  export namespace Data {
    export interface Error {
      message: string;

      records: Array<Error.Record>;
    }

    export namespace Error {
      export interface Record {
        account_number: string;

        bank_code: string;

        currency: string;

        description: string;

        email: string;

        name: string;

        type: string;
      }
    }
  }
}

export interface TransferrecipientCreateParams {
  /**
   * Recipient's bank account number
   */
  account_number: string;

  /**
   * Recipient's bank code. You can get the list of Bank Codes by calling the List
   * Banks endpoint
   */
  bank_code: string;

  /**
   * The recipient's name according to their account registration.
   */
  name: string;

  /**
   * Recipient Type
   */
  type: 'nuban' | 'ghipss' | 'mobile_money' | 'basa' | 'authorization';

  /**
   * An authorization code from a previous transaction
   */
  authorization_code?: string;

  /**
   * Currency for the account receiving the transfer
   */
  currency?: string;

  /**
   * A description for this recipient
   */
  description?: string;

  /**
   * JSON object of custom data
   */
  metadata?: unknown;
}

export interface TransferrecipientUpdateParams {
  /**
   * Recipient's email address
   */
  email?: string;

  /**
   * Recipient's name
   */
  name?: string;
}

export interface TransferrecipientListParams {
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
   * A flag to indicate if cursor based pagination should be used
   */
  use_cursor?: boolean;
}

export interface TransferrecipientCreateBulkParams {
  /**
   * A list of transfer recipient object.
   */
  batch: Array<TransferRecipientCreate>;
}

export declare namespace Transferrecipient {
  export {
    type TransferRecipientCreate as TransferRecipientCreate,
    type TransferrecipientCreateResponse as TransferrecipientCreateResponse,
    type TransferrecipientRetrieveResponse as TransferrecipientRetrieveResponse,
    type TransferrecipientUpdateResponse as TransferrecipientUpdateResponse,
    type TransferrecipientListResponse as TransferrecipientListResponse,
    type TransferrecipientDeleteResponse as TransferrecipientDeleteResponse,
    type TransferrecipientCreateBulkResponse as TransferrecipientCreateBulkResponse,
    type TransferrecipientCreateParams as TransferrecipientCreateParams,
    type TransferrecipientUpdateParams as TransferrecipientUpdateParams,
    type TransferrecipientListParams as TransferrecipientListParams,
    type TransferrecipientCreateBulkParams as TransferrecipientCreateBulkParams,
  };
}
