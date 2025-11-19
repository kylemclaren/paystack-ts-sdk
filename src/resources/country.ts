// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Country extends APIResource {
  /**
   * List all supported countries on Paystack
   */
  list(options?: RequestOptions): APIPromise<CountryListResponse> {
    return this._client.get('/country', options);
  }
}

export interface CountryListResponse {
  data: Array<CountryListResponse.Data>;

  message: string;

  status: boolean;
}

export namespace CountryListResponse {
  export interface Data {
    id: number;

    active_for_dashboard_onboarding: boolean;

    calling_code: string;

    default_currency_code: string;

    integration_defaults: unknown;

    iso_code: string;

    name: string;

    pilot_mode: boolean;

    relationships: Data.Relationships;
  }

  export namespace Data {
    export interface Relationships {
      currency: Relationships.Currency;

      integration_feature: Relationships.IntegrationFeature;

      integration_type: Relationships.IntegrationType;

      payment_method: Relationships.PaymentMethod;
    }

    export namespace Relationships {
      export interface Currency {
        data: Array<string>;

        supported_currencies: Currency.SupportedCurrencies;

        type: string;
      }

      export namespace Currency {
        export interface SupportedCurrencies {
          NGN: SupportedCurrencies.Ngn;

          USD: SupportedCurrencies.Usd;
        }

        export namespace SupportedCurrencies {
          export interface Ngn {
            bank: Ngn.Bank;
          }

          export namespace Ngn {
            export interface Bank {
              account_name: boolean;

              account_number_label: string;

              account_number_pattern: Bank.AccountNumberPattern;

              account_verification_required: boolean;

              bank_type: string;

              branch_code: boolean;

              branch_code_type: string;

              documents: Array<unknown>;

              show_account_number_tooltip: boolean;
            }

            export namespace Bank {
              export interface AccountNumberPattern {
                exact_match: boolean;

                pattern: string;
              }
            }
          }

          export interface Usd {
            bank: Usd.Bank;
          }

          export namespace Usd {
            export interface Bank {
              account_name: boolean;

              account_number_label: string;

              account_number_pattern: Bank.AccountNumberPattern;

              account_verification_required: boolean;

              bank_type: string;

              branch_code: boolean;

              branch_code_type: string;

              documents: Array<unknown>;

              notices: Array<string>;

              required_fields: Array<string>;
            }

            export namespace Bank {
              export interface AccountNumberPattern {
                exact_match: boolean;

                pattern: string;
              }
            }
          }
        }
      }

      export interface IntegrationFeature {
        data: Array<unknown>;

        type: string;
      }

      export interface IntegrationType {
        data: Array<string>;

        type: string;
      }

      export interface PaymentMethod {
        data: Array<string>;

        type: string;
      }
    }
  }
}

export declare namespace Country {
  export { type CountryListResponse as CountryListResponse };
}
