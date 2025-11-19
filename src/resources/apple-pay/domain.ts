// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Domain extends APIResource {
  /**
   * Lists all registered domains on your integration. Returns an empty array if no
   * domains have been added.
   *
   * @example
   * ```ts
   * const domains = await client.applePay.domain.list();
   * ```
   */
  list(
    query: DomainListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DomainListResponse> {
    return this._client.get('/apple-pay/domain', { query, ...options });
  }

  /**
   * Register a top-level domain or subdomain for your Apple Pay integration.
   *
   * > This endpoint can only be called with one domain or subdomain at a time.
   *
   * @example
   * ```ts
   * const response = await client.applePay.domain.register({
   *   domainName: 'example.com',
   * });
   * ```
   */
  register(body: DomainRegisterParams, options?: RequestOptions): APIPromise<DomainRegisterResponse> {
    return this._client.post('/apple-pay/domain', { body, ...options });
  }

  /**
   * Unregister a top-level domain or subdomain previously used for your Apple Pay
   * integration.
   *
   * @example
   * ```ts
   * const response = await client.applePay.domain.unregister({
   *   domainName: 'example.com',
   * });
   * ```
   */
  unregister(body: DomainUnregisterParams, options?: RequestOptions): APIPromise<DomainUnregisterResponse> {
    return this._client.delete('/apple-pay/domain', { body, ...options });
  }
}

export interface ApplePayParam {
  /**
   * The domain or subdomain for your application
   */
  domainName: string;
}

export interface DomainListResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface DomainRegisterResponse {
  /**
   * A short description of the response
   */
  message?: string;

  /**
   * An indicator
   */
  status?: boolean;
}

export interface DomainUnregisterResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface DomainListParams {
  /**
   * An alphanumeric value returned for every cursor based retrieval, used to
   * retrieve the next set of data
   */
  next?: string;

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

export interface DomainRegisterParams {
  /**
   * The domain or subdomain for your application
   */
  domainName: string;
}

export interface DomainUnregisterParams {
  /**
   * The domain or subdomain for your application
   */
  domainName: string;
}

export declare namespace Domain {
  export {
    type ApplePayParam as ApplePayParam,
    type DomainListResponse as DomainListResponse,
    type DomainRegisterResponse as DomainRegisterResponse,
    type DomainUnregisterResponse as DomainUnregisterResponse,
    type DomainListParams as DomainListParams,
    type DomainRegisterParams as DomainRegisterParams,
    type DomainUnregisterParams as DomainUnregisterParams,
  };
}
