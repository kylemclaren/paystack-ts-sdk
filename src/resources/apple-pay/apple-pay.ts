// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DomainAPI from './domain';
import {
  ApplePayParam,
  Domain,
  DomainListParams,
  DomainListResponse,
  DomainRegisterParams,
  DomainRegisterResponse,
  DomainUnregisterParams,
  DomainUnregisterResponse,
} from './domain';

export class ApplePay extends APIResource {
  domain: DomainAPI.Domain = new DomainAPI.Domain(this._client);
}

ApplePay.Domain = Domain;

export declare namespace ApplePay {
  export {
    Domain as Domain,
    type ApplePayParam as ApplePayParam,
    type DomainListResponse as DomainListResponse,
    type DomainRegisterResponse as DomainRegisterResponse,
    type DomainUnregisterResponse as DomainUnregisterResponse,
    type DomainListParams as DomainListParams,
    type DomainRegisterParams as DomainRegisterParams,
    type DomainUnregisterParams as DomainUnregisterParams,
  };
}
