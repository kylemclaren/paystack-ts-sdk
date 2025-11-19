// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TransactionAPI from './transaction';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Charge extends APIResource {
  /**
   * Initiate a payment by integrating the payment channel of your choice.
   *
   * @example
   * ```ts
   * const charge = await client.charge.create({
   *   amount: 0,
   *   email: 'email',
   * });
   * ```
   */
  create(body: ChargeCreateParams, options?: RequestOptions): APIPromise<ChargeCreateResponse> {
    return this._client.post('/charge', { body, ...options });
  }

  /**
   * When you get `pending` as a charge status or if there was an exception when
   * calling any of the `/charge` endpoints, wait 10 seconds or more, then make a
   * check to see if its status has changed. Don't call too early as you may get a
   * lot more pending than you should.
   *
   * @example
   * ```ts
   * const response = await client.charge.checkStatus(
   *   '5bwib5v6anhe9xa',
   * );
   * ```
   */
  checkStatus(reference: string, options?: RequestOptions): APIPromise<ChargeCheckStatusResponse> {
    return this._client.get(path`/charge/${reference}`, options);
  }

  /**
   * Send the details of the customer's address for address verification
   *
   * @example
   * ```ts
   * const response = await client.charge.submitAddress({
   *   address: '140 N 2ND ST',
   *   city: 'Stroudsburg',
   *   reference: '5bwib5v6anhe9xa',
   *   state: 'PA',
   *   zip_code: '18360',
   * });
   * ```
   */
  submitAddress(
    body: ChargeSubmitAddressParams,
    options?: RequestOptions,
  ): APIPromise<ChargeSubmitAddressResponse> {
    return this._client.post('/charge/submit_address', { body, ...options });
  }

  /**
   * Submit the customer's birthday when requested
   *
   * @example
   * ```ts
   * const response = await client.charge.submitBirthday({
   *   birthday: '1961-09-21',
   *   reference: '5bwib5v6anhe9xa',
   * });
   * ```
   */
  submitBirthday(
    body: ChargeSubmitBirthdayParams,
    options?: RequestOptions,
  ): APIPromise<ChargeSubmitBirthdayResponse> {
    return this._client.post('/charge/submit_birthday', { body, ...options });
  }

  /**
   * Submit OTP to complete a charge
   *
   * @example
   * ```ts
   * const response = await client.charge.submitOtp({
   *   otp: '123456',
   *   reference: '5bwib5v6anhe9xa',
   * });
   * ```
   */
  submitOtp(body: ChargeSubmitOtpParams, options?: RequestOptions): APIPromise<ChargeSubmitOtpResponse> {
    return this._client.post('/charge/submit_otp', { body, ...options });
  }

  /**
   * Submit phone number when requested
   *
   * @example
   * ```ts
   * const response = await client.charge.submitPhone({
   *   phone: '08012345678',
   *   reference: '5bwib5v6anhe9xa',
   * });
   * ```
   */
  submitPhone(
    body: ChargeSubmitPhoneParams,
    options?: RequestOptions,
  ): APIPromise<ChargeSubmitPhoneResponse> {
    return this._client.post('/charge/submit_phone', { body, ...options });
  }

  /**
   * Submit PIN to continue a charge
   *
   * @example
   * ```ts
   * const response = await client.charge.submitPin({
   *   pin: '1234',
   *   reference: '5bwib5v6anhe9xa',
   * });
   * ```
   */
  submitPin(body: ChargeSubmitPinParams, options?: RequestOptions): APIPromise<ChargeSubmitPinResponse> {
    return this._client.post('/charge/submit_pin', { body, ...options });
  }
}

export interface ChargeCreateResponse {
  data: ChargeCreateResponse.Data;

  message: string;

  status: boolean;
}

export namespace ChargeCreateResponse {
  export interface Data {
    id: number;

    amount: number;

    authorization: Data.Authorization;

    channel: string;

    connect: unknown;

    created_at: string;

    createdAt: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    fees: number;

    fees_breakdown: unknown;

    fees_split: number | null;

    gateway_response: string;

    ip_address: string;

    log: Data.Log | null;

    message: string | null;

    metadata: Data.Metadata;

    order_id: unknown;

    paid_at: string;

    paidAt: string;

    plan: unknown;

    plan_object: unknown;

    pos_transaction_data: unknown;

    receipt_number: unknown;

    reference: string;

    requested_amount: number;

    source: unknown;

    split: unknown;

    status: string;

    subaccount: unknown;

    transaction_date: string;
  }

  export namespace Data {
    export interface Authorization {
      account_name: unknown;

      authorization_code: string;

      bank: string;

      bin: string;

      brand: string;

      card_type: string;

      channel: string;

      country_code: string;

      exp_month: string;

      exp_year: string;

      last4: string;

      receiver_bank: unknown;

      receiver_bank_account_number: unknown;

      reusable: boolean;

      signature: string;
    }

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

export interface ChargeCheckStatusResponse {
  data: ChargeCheckStatusResponse.Data;

  message: string;

  status: boolean;
}

export namespace ChargeCheckStatusResponse {
  export interface Data {
    amount: number;

    authorization: Data.Authorization;

    channel: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    fees: number | null;

    gateway_response: string;

    message: string | null;

    metadata: unknown;

    redirect_url: string | null;

    reference: string;

    status: string;

    transaction_date: string;
  }

  export namespace Data {
    export interface Authorization {
      authorization_code: string | null;

      bank: string;

      bin: string;

      brand: string;

      card_type: string;

      channel: string;

      country_code: string;

      exp_month: string;

      exp_year: string;

      last4: string;

      reusable: boolean;

      signature: string;
    }

    export interface Customer {
      customer_code: string;

      email: string;

      first_name: string | null;

      last_name: string | null;

      phone: string | null;

      risk_action: string;
    }
  }
}

export interface ChargeSubmitAddressResponse {
  data?: unknown;

  message?: string;

  status?: boolean;
}

export interface ChargeSubmitBirthdayResponse {
  data: ChargeSubmitBirthdayResponse.Data;

  message: string;

  status: boolean;
}

export namespace ChargeSubmitBirthdayResponse {
  export interface Data {
    display_text: string;

    status: string;
  }
}

export interface ChargeSubmitOtpResponse {
  data: ChargeSubmitOtpResponse.Data;

  message: string;

  status: boolean;
}

export namespace ChargeSubmitOtpResponse {
  export interface Data {
    amount: number;

    authorization: Data.Authorization;

    channel: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    fees: number | null;

    gateway_response: string;

    message: string | null;

    metadata: unknown;

    redirect_url: string | null;

    reference: string;

    status: string;

    transaction_date: string;
  }

  export namespace Data {
    export interface Authorization {
      authorization_code: string | null;

      bank: string;

      bin: string;

      brand: string;

      card_type: string;

      channel: string;

      country_code: string;

      exp_month: string;

      exp_year: string;

      last4: string;

      reusable: boolean;

      signature: string;
    }

    export interface Customer {
      customer_code: string;

      email: string;

      first_name: string | null;

      last_name: string | null;

      phone: string | null;

      risk_action: string;
    }
  }
}

export interface ChargeSubmitPhoneResponse {
  data: ChargeSubmitPhoneResponse.Data;

  message: string;

  status: boolean;
}

export namespace ChargeSubmitPhoneResponse {
  export interface Data {
    amount: number;

    authorization: Data.Authorization;

    channel: string;

    currency: string;

    customer: Data.Customer;

    display_text: string;

    domain: string;

    fees: number | null;

    gateway_response: string;

    message: string | null;

    metadata: unknown;

    redirect_url: string | null;

    reference: string;

    status: string;

    transaction_date: string;
  }

  export namespace Data {
    export interface Authorization {
      authorization_code: string | null;

      bank: string;

      bin: string;

      brand: string;

      card_type: string;

      channel: string;

      country_code: string;

      exp_month: string;

      exp_year: string;

      last4: string;

      reusable: boolean;

      signature: string;
    }

    export interface Customer {
      customer_code: string;

      email: string;

      first_name: string | null;

      last_name: string | null;

      phone: string | null;

      risk_action: string;
    }
  }
}

export interface ChargeSubmitPinResponse {
  data: ChargeSubmitPinResponse.Data;

  message: string;

  status: boolean;
}

export namespace ChargeSubmitPinResponse {
  export interface Data {
    amount: number;

    authorization: Data.Authorization;

    channel: string;

    currency: string;

    customer: Data.Customer;

    domain: string;

    fees: number | null;

    gateway_response: string;

    message: string | null;

    metadata: unknown;

    redirect_url: string | null;

    reference: string;

    status: string;

    transaction_date: string;
  }

  export namespace Data {
    export interface Authorization {
      authorization_code: string | null;

      bank: string;

      bin: string;

      brand: string;

      card_type: string;

      channel: string;

      country_code: string;

      exp_month: string;

      exp_year: string;

      last4: string;

      reusable: boolean;

      signature: string;
    }

    export interface Customer {
      customer_code: string;

      email: string;

      first_name: string | null;

      last_name: string | null;

      phone: string | null;

      risk_action: string;
    }
  }
}

export interface ChargeCreateParams {
  /**
   * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and
   * cents, if currency is ZAR
   */
  amount: number;

  /**
   * Customer's email address
   */
  email: string;

  /**
   * An authorization code to charge.
   */
  authorization_code?: string;

  /**
   * The bank object if charging a bank account
   */
  bank?: ChargeCreateParams.Bank;

  /**
   * The customer's birthday in the format YYYY-MM-DD e.g 2017-05-16
   */
  birthday?: string;

  /**
   * This is the unique identifier of the device a user uses in making payment. Only
   * -, .`, = and alphanumeric characters are allowed.
   */
  device_id?: string;

  /**
   * Details of the EFT provider
   */
  eft?: ChargeCreateParams.Eft;

  /**
   * JSON object of custom data
   */
  metadata?: unknown;

  /**
   * Details of the mobile service provider
   */
  mobile_money?: ChargeCreateParams.MobileMoney;

  /**
   * 4-digit PIN (send with a non-reusable authorization code)
   */
  pin?: string;

  /**
   * Unique transaction reference. Only -, .`, = and alphanumeric characters allowed.
   */
  reference?: string;

  /**
   * The USSD code for the provider to charge
   */
  ussd?: ChargeCreateParams.Ussd;
}

export namespace ChargeCreateParams {
  /**
   * The bank object if charging a bank account
   */
  export interface Bank {
    /**
     * Customer's account number
     */
    account_number?: string;

    /**
     * Customer's bank code
     */
    code?: string;
  }

  /**
   * Details of the EFT provider
   */
  export interface Eft {
    /**
     * The EFT provider
     */
    provider?: string;
  }

  /**
   * Details of the mobile service provider
   */
  export interface MobileMoney {
    /**
     * Customer's phone number
     */
    phone?: string;

    /**
     * The telco provider of customer's phone number. This can be fetched from the List
     * Bank endpoint
     */
    provider?: string;
  }

  /**
   * The USSD code for the provider to charge
   */
  export interface Ussd {
    /**
     * The three-digit USSD code.
     */
    type?: '737' | '919' | '822' | '966';
  }
}

export interface ChargeSubmitAddressParams {
  /**
   * Customer's address
   */
  address: string;

  /**
   * Customer's city
   */
  city: string;

  /**
   * The reference of the ongoing transaction
   */
  reference: string;

  /**
   * Customer's state
   */
  state: string;

  /**
   * Customer's zipcode
   */
  zip_code: string;
}

export interface ChargeSubmitBirthdayParams {
  /**
   * Customer's birthday in the format YYYY-MM-DD e.g 2016-09-21
   */
  birthday: string;

  /**
   * The reference of the ongoing transaction
   */
  reference: string;
}

export interface ChargeSubmitOtpParams {
  /**
   * Customer's OTP for ongoing transaction
   */
  otp: string;

  /**
   * The reference of the ongoing transaction
   */
  reference: string;
}

export interface ChargeSubmitPhoneParams {
  /**
   * Customer's mobile number
   */
  phone: string;

  /**
   * The reference of the ongoing transaction
   */
  reference: string;
}

export interface ChargeSubmitPinParams {
  /**
   * Customer's PIN for the ongoing transaction
   */
  pin: string;

  /**
   * Transaction reference that requires the PIN
   */
  reference: string;
}

export declare namespace Charge {
  export {
    type ChargeCreateResponse as ChargeCreateResponse,
    type ChargeCheckStatusResponse as ChargeCheckStatusResponse,
    type ChargeSubmitAddressResponse as ChargeSubmitAddressResponse,
    type ChargeSubmitBirthdayResponse as ChargeSubmitBirthdayResponse,
    type ChargeSubmitOtpResponse as ChargeSubmitOtpResponse,
    type ChargeSubmitPhoneResponse as ChargeSubmitPhoneResponse,
    type ChargeSubmitPinResponse as ChargeSubmitPinResponse,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeSubmitAddressParams as ChargeSubmitAddressParams,
    type ChargeSubmitBirthdayParams as ChargeSubmitBirthdayParams,
    type ChargeSubmitOtpParams as ChargeSubmitOtpParams,
    type ChargeSubmitPhoneParams as ChargeSubmitPhoneParams,
    type ChargeSubmitPinParams as ChargeSubmitPinParams,
  };
}
