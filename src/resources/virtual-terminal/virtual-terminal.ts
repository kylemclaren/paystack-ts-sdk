// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DestinationAPI from './destination';
import {
  Destination as DestinationAPIDestination,
  DestinationAssignParams,
  DestinationAssignResponse,
  DestinationUnassignParams,
  DestinationUnassignResponse,
} from './destination';
import * as SplitCodeAPI from './split-code';
import {
  SplitCode,
  SplitCodeAddParams,
  SplitCodeAddResponse,
  SplitCodeRemoveParams,
  SplitCodeRemoveResponse,
} from './split-code';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class VirtualTerminal extends APIResource {
  destination: DestinationAPI.Destination = new DestinationAPI.Destination(this._client);
  splitCode: SplitCodeAPI.SplitCode = new SplitCodeAPI.SplitCode(this._client);

  /**
   * Create a Virtual Terminal on your integration
   *
   * @example
   * ```ts
   * const virtualTerminal = await client.virtualTerminal.create(
   *   { destinations: [{}, {}], name: 'Sample Terminal' },
   * );
   * ```
   */
  create(
    body: VirtualTerminalCreateParams,
    options?: RequestOptions,
  ): APIPromise<VirtualTerminalCreateResponse> {
    return this._client.post('/virtual_terminal', { body, ...options });
  }

  /**
   * Fetch a Virtual Terminal on your integration
   *
   * @example
   * ```ts
   * const virtualTerminal =
   *   await client.virtualTerminal.retrieve('VT_MCK5292Z');
   * ```
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<VirtualTerminalRetrieveResponse> {
    return this._client.get(path`/virtual_terminal/${code}`, options);
  }

  /**
   * Update a Virtual Terminal on your integration
   *
   * @example
   * ```ts
   * const virtualTerminal = await client.virtualTerminal.update(
   *   'VT_MCK5292Z',
   *   { name: 'Lagos_Mainland_Zone_1' },
   * );
   * ```
   */
  update(
    code: string,
    body: VirtualTerminalUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VirtualTerminalUpdateResponse> {
    return this._client.put(path`/virtual_terminal/${code}`, { body, ...options });
  }

  /**
   * List Virtual Terminals on your integration
   *
   * @example
   * ```ts
   * const virtualTerminals =
   *   await client.virtualTerminal.list();
   * ```
   */
  list(
    query: VirtualTerminalListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VirtualTerminalListResponse> {
    return this._client.get('/virtual_terminal', { query, ...options });
  }

  /**
   * Deactivate a Virtual Terminal on your integration
   *
   * @example
   * ```ts
   * const response = await client.virtualTerminal.deactivate(
   *   'VT_MCK5292Z',
   * );
   * ```
   */
  deactivate(code: string, options?: RequestOptions): APIPromise<VirtualTerminalDeactivateResponse> {
    return this._client.put(path`/virtual_terminal/${code}/deactivate`, options);
  }
}

export interface VirtualTerminalCreateResponse {
  data: VirtualTerminalCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace VirtualTerminalCreateResponse {
  export interface Data {
    id: number;

    active: boolean;

    code: string;

    currency: string;

    destinations: Array<Data.Destination>;

    domain: string;

    integration: number;

    metadata: unknown;

    name: string;

    paymentMethods: Array<unknown>;
  }

  export namespace Data {
    export interface Destination {
      name?: string;

      target?: string;

      type?: string;
    }
  }
}

export interface VirtualTerminalRetrieveResponse {
  data: VirtualTerminalRetrieveResponse.Data;

  message: string;

  status: boolean;
}

export namespace VirtualTerminalRetrieveResponse {
  export interface Data {
    id: number;

    active: boolean;

    code: string;

    connect_account_id: unknown;

    created_at: string;

    currency: string;

    destinations: Array<Data.Destination>;

    domain: string;

    integration: number;

    name: string;

    paymentMethods: Array<unknown>;
  }

  export namespace Data {
    export interface Destination {
      created_at?: string;

      name?: string;

      target?: string;

      type?: string;
    }
  }
}

export interface VirtualTerminalUpdateResponse {
  data: VirtualTerminalUpdateResponse.Data;

  message: string;

  status: boolean;
}

export namespace VirtualTerminalUpdateResponse {
  export interface Data {
    id: number;

    active: boolean;

    code: string;

    connect_account_id: unknown;

    created_at: string;

    currency: string;

    destinations: Array<Data.Destination>;

    domain: string;

    integration: number;

    name: string;

    paymentMethods: Array<unknown>;
  }

  export namespace Data {
    export interface Destination {
      created_at?: string;

      name?: string;

      target?: string;

      type?: string;
    }
  }
}

export interface VirtualTerminalListResponse {
  data?: Array<VirtualTerminalListResponse.Data>;

  message?: string;

  meta?: VirtualTerminalListResponse.Meta;

  status?: boolean;
}

export namespace VirtualTerminalListResponse {
  export interface Data {
    id: number;

    active: boolean;

    code: string;

    created_at: string;

    currency: string;

    domain: string;

    integration: number;

    name: string;

    paymentMethods: Array<unknown>;
  }

  export interface Meta {
    page?: number;

    pageCount?: number;

    perPage?: string | number;

    skipped?: number;

    total?: number;
  }
}

export interface VirtualTerminalDeactivateResponse {
  message: string;

  status: boolean;
}

export interface VirtualTerminalCreateParams {
  /**
   * Array of objects containing recipients for payment notifications for the Virtual
   * Terminal.
   */
  destinations: Array<VirtualTerminalCreateParams.Destination>;

  /**
   * The name of the virtual terminal
   */
  name: string;

  /**
   * Additional custom data as key-value pairs
   */
  metadata?: unknown;

  /**
   * Split code to associate with the virtual terminal
   */
  split_code?: string;
}

export namespace VirtualTerminalCreateParams {
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

export interface VirtualTerminalUpdateParams {
  /**
   * Name of the virtual terminal
   */
  name: string;
}

export interface VirtualTerminalListParams {
  /**
   * The offset to retrieve data from
   */
  page?: number;

  /**
   * The number of records to fetch per request
   */
  perPage?: number;
}

VirtualTerminal.Destination = DestinationAPIDestination;
VirtualTerminal.SplitCode = SplitCode;

export declare namespace VirtualTerminal {
  export {
    type VirtualTerminalCreateResponse as VirtualTerminalCreateResponse,
    type VirtualTerminalRetrieveResponse as VirtualTerminalRetrieveResponse,
    type VirtualTerminalUpdateResponse as VirtualTerminalUpdateResponse,
    type VirtualTerminalListResponse as VirtualTerminalListResponse,
    type VirtualTerminalDeactivateResponse as VirtualTerminalDeactivateResponse,
    type VirtualTerminalCreateParams as VirtualTerminalCreateParams,
    type VirtualTerminalUpdateParams as VirtualTerminalUpdateParams,
    type VirtualTerminalListParams as VirtualTerminalListParams,
  };

  export {
    DestinationAPIDestination as Destination,
    type DestinationAssignResponse as DestinationAssignResponse,
    type DestinationUnassignResponse as DestinationUnassignResponse,
    type DestinationAssignParams as DestinationAssignParams,
    type DestinationUnassignParams as DestinationUnassignParams,
  };

  export {
    SplitCode as SplitCode,
    type SplitCodeAddResponse as SplitCodeAddResponse,
    type SplitCodeRemoveResponse as SplitCodeRemoveResponse,
    type SplitCodeAddParams as SplitCodeAddParams,
    type SplitCodeRemoveParams as SplitCodeRemoveParams,
  };
}
