// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Event extends APIResource {
  /**
   * Check the status of an event sent to the Terminal
   *
   * @example
   * ```ts
   * const response = await client.terminal.event.fetchStatus(
   *   '616d721e8c5cd40a0cdd54a6',
   *   { terminal_id: 'Z0R4orOU' },
   * );
   * ```
   */
  fetchStatus(
    eventID: string,
    params: EventFetchStatusParams,
    options?: RequestOptions,
  ): APIPromise<EventFetchStatusResponse> {
    const { terminal_id } = params;
    return this._client.get(path`/terminal/${terminal_id}/event/${eventID}`, options);
  }

  /**
   * Send an event from your application to the Paystack Terminal
   *
   * @example
   * ```ts
   * const response = await client.terminal.event.send(
   *   'Z0R4orOU',
   * );
   * ```
   */
  send(
    id: string,
    body: EventSendParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EventSendResponse> {
    return this._client.post(path`/terminal/${id}/event`, { body, ...options });
  }
}

export interface EventFetchStatusResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface EventSendResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface EventFetchStatusParams {
  /**
   * The ID of the Terminal the event should be sent to.
   */
  terminal_id: string;
}

export interface EventSendParams {
  /**
   * The action the Terminal needs to perform. For the invoice type, the action can
   * either be process or view. For the transaction type, the action can either be
   * process or print.
   */
  action?: 'process' | 'view' | 'print';

  /**
   * The parameters needed to perform the specified action
   */
  data?: EventSendParams.Data;

  /**
   * The type of event to push
   */
  type?: 'invoice' | 'transaction';
}

export namespace EventSendParams {
  /**
   * The parameters needed to perform the specified action
   */
  export interface Data {
    /**
     * The invoice or transaction ID you want to push to the Terminal
     */
    id?: number;

    /**
     * The offline_reference from the Payment Request response
     */
    reference?: string;
  }
}

export declare namespace Event {
  export {
    type EventFetchStatusResponse as EventFetchStatusResponse,
    type EventSendResponse as EventSendResponse,
    type EventFetchStatusParams as EventFetchStatusParams,
    type EventSendParams as EventSendParams,
  };
}
