// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Manage extends APIResource {
  /**
   * Generate a link for updating the card on a subscription
   *
   * @example
   * ```ts
   * const response =
   *   await client.subscription.manage.generateUpdateLink(
   *     'qlgwhpyq1ts9nsw',
   *   );
   * ```
   */
  generateUpdateLink(code: string, options?: RequestOptions): APIPromise<ManageGenerateUpdateLinkResponse> {
    return this._client.get(path`/subscription/${code}/manage/link`, options);
  }

  /**
   * Email a customer a link for updating the card on their subscription
   *
   * @example
   * ```ts
   * const response =
   *   await client.subscription.manage.sendUpdateLink(
   *     'qlgwhpyq1ts9nsw',
   *   );
   * ```
   */
  sendUpdateLink(code: string, options?: RequestOptions): APIPromise<ManageSendUpdateLinkResponse> {
    return this._client.post(path`/subscription/${code}/manage/email`, options);
  }
}

export interface ManageGenerateUpdateLinkResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface ManageSendUpdateLinkResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export declare namespace Manage {
  export {
    type ManageGenerateUpdateLinkResponse as ManageGenerateUpdateLinkResponse,
    type ManageSendUpdateLinkResponse as ManageSendUpdateLinkResponse,
  };
}
