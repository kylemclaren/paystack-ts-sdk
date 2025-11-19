// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EventAPI from './event';
import {
  Event,
  EventFetchStatusParams,
  EventFetchStatusResponse,
  EventSendParams,
  EventSendResponse,
} from './event';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Terminal extends APIResource {
  event: EventAPI.Event = new EventAPI.Event(this._client);

  /**
   * Get the details of a Terminal
   *
   * @example
   * ```ts
   * const terminal = await client.terminal.retrieve('Z0R4orOU');
   * ```
   */
  retrieve(terminalID: string, options?: RequestOptions): APIPromise<TerminalRetrieveResponse> {
    return this._client.get(path`/terminal/${terminalID}`, options);
  }

  /**
   * Update the details of a Terminal
   *
   * @example
   * ```ts
   * const terminal = await client.terminal.update('Z0R4orOU');
   * ```
   */
  update(
    terminalID: string,
    body: TerminalUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TerminalUpdateResponse> {
    return this._client.put(path`/terminal/${terminalID}`, { body, ...options });
  }

  /**
   * List the Terminals available on your integration
   *
   * @example
   * ```ts
   * const terminals = await client.terminal.list();
   * ```
   */
  list(
    query: TerminalListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TerminalListResponse> {
    return this._client.get('/terminal', { query, ...options });
  }

  /**
   * Activate your debug device by linking it to your integration
   *
   * @example
   * ```ts
   * const response = await client.terminal.commission({
   *   serial_number: '1111150412230003899',
   * });
   * ```
   */
  commission(
    body: TerminalCommissionParams,
    options?: RequestOptions,
  ): APIPromise<TerminalCommissionResponse> {
    return this._client.post('/terminal/commission_device', { body, ...options });
  }

  /**
   * Unlink your debug device from your integration
   *
   * @example
   * ```ts
   * const response = await client.terminal.decommission({
   *   serial_number: '1111150412230003899',
   * });
   * ```
   */
  decommission(
    body: TerminalDecommissionParams,
    options?: RequestOptions,
  ): APIPromise<TerminalDecommissionResponse> {
    return this._client.post('/terminal/decommission_device', { body, ...options });
  }

  /**
   * Check the availiability of a Terminal before sending an event to it
   *
   * @example
   * ```ts
   * const response = await client.terminal.fetchStatus(
   *   'Z0R4orOU',
   * );
   * ```
   */
  fetchStatus(terminalID: string, options?: RequestOptions): APIPromise<TerminalFetchStatusResponse> {
    return this._client.get(path`/terminal/${terminalID}/presence`, options);
  }
}

/**
 * Model for activating and deactivating a debug Terminal
 */
export interface TerminalActivationToggle {
  /**
   * Device Serial Number
   */
  serial_number: string;
}

export interface TerminalRetrieveResponse {
  data: TerminalRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace TerminalRetrieveResponse {
  export interface Data {
    id: number;

    address: string | null;

    device_make: string | null;

    domain: string;

    integration: number;

    name: string | null;

    serial_number: string;

    split_code: string | null;

    status: string;

    terminal_id: string;
  }
}

export interface TerminalUpdateResponse {
  message: string;

  status: boolean;
}

export interface TerminalListResponse {
  data: Array<TerminalListResponse.Data>;

  message: string;

  meta: TerminalListResponse.Meta;

  status: boolean;
}

export namespace TerminalListResponse {
  export interface Data {
    id: number;

    address: string | null;

    device_make: string | null;

    domain: string;

    integration: number;

    name: string | null;

    serial_number: string | null;

    status: string;

    terminal_id: string;
  }

  export interface Meta {
    next: string | null;

    perPage: number;

    previous: string | null;
  }
}

export interface TerminalCommissionResponse {
  message: string;

  status: boolean;
}

export interface TerminalDecommissionResponse {
  message: string;

  status: boolean;
}

export interface TerminalFetchStatusResponse {
  data: TerminalFetchStatusResponse.Data;

  message: string;

  status: boolean;
}

export namespace TerminalFetchStatusResponse {
  export interface Data {
    available: boolean;

    online: boolean;
  }
}

export interface TerminalUpdateParams {
  /**
   * The new address for the Terminal
   */
  address?: string;

  /**
   * The new name for the Terminal
   */
  name?: string;
}

export interface TerminalListParams {
  /**
   * A cursor that indicates your place in the list. It can be used to fetch the next
   * page of the list
   */
  next?: string;

  /**
   * Specify how many records you want to retrieve per page
   */
  per_page?: number;

  /**
   * A cursor that indicates your place in the list. It should be used to fetch the
   * previous page of the list after an intial next request
   */
  previous?: string;
}

export interface TerminalCommissionParams {
  /**
   * Device Serial Number
   */
  serial_number: string;
}

export interface TerminalDecommissionParams {
  /**
   * Device Serial Number
   */
  serial_number: string;
}

Terminal.Event = Event;

export declare namespace Terminal {
  export {
    type TerminalActivationToggle as TerminalActivationToggle,
    type TerminalRetrieveResponse as TerminalRetrieveResponse,
    type TerminalUpdateResponse as TerminalUpdateResponse,
    type TerminalListResponse as TerminalListResponse,
    type TerminalCommissionResponse as TerminalCommissionResponse,
    type TerminalDecommissionResponse as TerminalDecommissionResponse,
    type TerminalFetchStatusResponse as TerminalFetchStatusResponse,
    type TerminalUpdateParams as TerminalUpdateParams,
    type TerminalListParams as TerminalListParams,
    type TerminalCommissionParams as TerminalCommissionParams,
    type TerminalDecommissionParams as TerminalDecommissionParams,
  };

  export {
    Event as Event,
    type EventFetchStatusResponse as EventFetchStatusResponse,
    type EventSendResponse as EventSendResponse,
    type EventFetchStatusParams as EventFetchStatusParams,
    type EventSendParams as EventSendParams,
  };
}
