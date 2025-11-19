// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Paystack } from '../client';

export abstract class APIResource {
  protected _client: Paystack;

  constructor(client: Paystack) {
    this._client = client;
  }
}
