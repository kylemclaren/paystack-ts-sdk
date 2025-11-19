// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Destination extends APIResource {
  /**
   * Add a destination (WhatsApp number) to a Virtual Terminal on your integration
   *
   * @example
   * ```ts
   * const response =
   *   await client.virtualTerminal.destination.assign(
   *     'VT_MCK5292Z',
   *     { destinations: [{}, {}] },
   *   );
   * ```
   */
  assign(
    code: string,
    body: DestinationAssignParams,
    options?: RequestOptions,
  ): APIPromise<DestinationAssignResponse> {
    return this._client.post(path`/virtual_terminal/${code}/destination/assign`, { body, ...options });
  }

  /**
   * Unassign a destination (WhatsApp Number) from a Virtual Terminal on your
   * integration
   *
   * @example
   * ```ts
   * const response =
   *   await client.virtualTerminal.destination.unassign(
   *     'VT_MCK5292Z',
   *     { targets: ['+2548012345678', '+2548098765432'] },
   *   );
   * ```
   */
  unassign(
    code: string,
    body: DestinationUnassignParams,
    options?: RequestOptions,
  ): APIPromise<DestinationUnassignResponse> {
    return this._client.post(path`/virtual_terminal/${code}/destination/unassign`, { body, ...options });
  }
}

export interface DestinationAssignResponse {
  data: Array<DestinationAssignResponse.Data>;

  message: string;

  status: boolean;
}

export namespace DestinationAssignResponse {
  export interface Data {
    id: number;

    createdAt: string;

    integration: number;

    name: string;

    target: string;

    type: string;

    updatedAt: string;
  }
}

export interface DestinationUnassignResponse {
  message: string;

  status: boolean;
}

export interface DestinationAssignParams {
  /**
   * Array of objects containing recipients for payment notifications for the Virtual
   * Terminal.
   */
  destinations: Array<DestinationAssignParams.Destination>;
}

export namespace DestinationAssignParams {
  export interface Destination {
    /**
     * The name of the associated WhatsApp number
     */
    name?: string;

    /**
     * The WhatsApp number to receive payment notifications
     */
    target?: string;
  }
}

export interface DestinationUnassignParams {
  /**
   * Array of destination targets to unassign
   */
  targets: Array<string>;
}

export declare namespace Destination {
  export {
    type DestinationAssignResponse as DestinationAssignResponse,
    type DestinationUnassignResponse as DestinationUnassignResponse,
    type DestinationAssignParams as DestinationAssignParams,
    type DestinationUnassignParams as DestinationUnassignParams,
  };
}
