// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  AddressVerification,
  AddressVerificationListStatesParams,
  AddressVerificationListStatesResponse,
} from './resources/address-verification';
import {
  Balance,
  BalanceFetchLedgerParams,
  BalanceFetchLedgerResponse,
  BalanceFetchResponse,
} from './resources/balance';
import {
  Bank,
  BankListParams,
  BankListResponse,
  BankResolveAccountParams,
  BankResolveAccountResponse,
  BankValidateAccountParams,
  BankValidateAccountResponse,
} from './resources/bank';
import {
  Bulkcharge,
  BulkchargeCreateParams,
  BulkchargeCreateResponse,
  BulkchargeListChargesParams,
  BulkchargeListChargesResponse,
  BulkchargeListParams,
  BulkchargeListResponse,
  BulkchargePauseResponse,
  BulkchargeResumeResponse,
  BulkchargeRetrieveResponse,
} from './resources/bulkcharge';
import {
  Charge,
  ChargeCheckStatusResponse,
  ChargeCreateParams,
  ChargeCreateResponse,
  ChargeSubmitAddressParams,
  ChargeSubmitAddressResponse,
  ChargeSubmitBirthdayParams,
  ChargeSubmitBirthdayResponse,
  ChargeSubmitOtpParams,
  ChargeSubmitOtpResponse,
  ChargeSubmitPhoneParams,
  ChargeSubmitPhoneResponse,
  ChargeSubmitPinParams,
  ChargeSubmitPinResponse,
} from './resources/charge';
import { Country, CountryListResponse } from './resources/country';
import { Decision, DecisionResolveBinResponse } from './resources/decision';
import {
  Directdebit,
  DirectdebitListMandateAuthorizationsParams,
  DirectdebitListMandateAuthorizationsResponse,
  DirectdebitTriggerActivationChargeParams,
  DirectdebitTriggerActivationChargeResponse,
} from './resources/directdebit';
import {
  Dispute,
  DisputeAddEvidenceParams,
  DisputeAddEvidenceResponse,
  DisputeExportParams,
  DisputeExportResponse,
  DisputeFetchUploadURLResponse,
  DisputeHistoryArray,
  DisputeListParams,
  DisputeListResponse,
  DisputeListTransactionDisputesResponse,
  DisputeMessagesArray,
  DisputeResolveParams,
  DisputeResolveResponse,
  DisputeRetrieveResponse,
  DisputeUpdateParams,
  DisputeUpdateResponse,
} from './resources/dispute';
import {
  Order,
  OrderCreateParams,
  OrderCreateResponse,
  OrderFetchProductOrdersResponse,
  OrderListParams,
  OrderListResponse,
  OrderRetrieveResponse,
  OrderValidateResponse,
} from './resources/order';
import {
  Page,
  PageAddProductParams,
  PageAddProductResponse,
  PageCheckSlugAvailabilityResponse,
  PageCreateParams,
  PageCreateResponse,
  PageListParams,
  PageListResponse,
  PageRetrieveResponse,
  PageUpdateParams,
  PageUpdateResponse,
} from './resources/page';
import {
  PaymentRequestLineItemsArray,
  PaymentRequestTaxArray,
  Paymentrequest,
  PaymentrequestArchiveResponse,
  PaymentrequestCreateParams,
  PaymentrequestCreateResponse,
  PaymentrequestFinalizeResponse,
  PaymentrequestGetTotalsResponse,
  PaymentrequestListParams,
  PaymentrequestListResponse,
  PaymentrequestRetrieveResponse,
  PaymentrequestSendNotificationResponse,
  PaymentrequestUpdateParams,
  PaymentrequestUpdateResponse,
  PaymentrequestVerifyResponse,
} from './resources/paymentrequest';
import {
  Plan,
  PlanCreateParams,
  PlanCreateResponse,
  PlanListParams,
  PlanListResponse,
  PlanRetrieveResponse,
  PlanUpdateParams,
  PlanUpdateResponse,
} from './resources/plan';
import {
  Product,
  ProductCreateParams,
  ProductCreateResponse,
  ProductDeleteResponse,
  ProductListParams,
  ProductListResponse,
  ProductRetrieveResponse,
  ProductUpdateParams,
  ProductUpdateResponse,
} from './resources/product';
import {
  Refund,
  RefundCreateParams,
  RefundCreateResponse,
  RefundListParams,
  RefundListResponse,
  RefundRetrieveResponse,
  RefundRetryWithCustomerDetailsParams,
  RefundRetryWithCustomerDetailsResponse,
} from './resources/refund';
import {
  Settlement,
  SettlementListParams,
  SettlementListResponse,
  SettlementRetrieveTransactionsResponse,
} from './resources/settlement';
import {
  Subaccount,
  SubaccountCreateParams,
  SubaccountCreateResponse,
  SubaccountListParams,
  SubaccountListResponse,
  SubaccountRetrieveResponse,
  SubaccountUpdateParams,
  SubaccountUpdateResponse,
} from './resources/subaccount';
import {
  Currency,
  MetadataCustomFields,
  Transaction,
  TransactionChargeAuthorizationParams,
  TransactionChargeAuthorizationResponse,
  TransactionExportParams,
  TransactionExportResponse,
  TransactionFetchTimelineResponse,
  TransactionGetTotalsParams,
  TransactionGetTotalsResponse,
  TransactionInitializeParams,
  TransactionInitializeResponse,
  TransactionListParams,
  TransactionListResponse,
  TransactionPartialDebitParams,
  TransactionPartialDebitResponse,
  TransactionRetrieveResponse,
  TransactionVerifyResponse,
} from './resources/transaction';
import {
  Transfer,
  TransferBase,
  TransferDisableOtpResponse,
  TransferEnableOtpResponse,
  TransferExportParams,
  TransferExportResponse,
  TransferFetchResponse,
  TransferFinalizeDisableOtpParams,
  TransferFinalizeDisableOtpResponse,
  TransferFinalizeParams,
  TransferFinalizeResponse,
  TransferInitiateBulkParams,
  TransferInitiateBulkResponse,
  TransferInitiateParams,
  TransferInitiateResponse,
  TransferListParams,
  TransferListResponse,
  TransferResendOtpParams,
  TransferResendOtpResponse,
  TransferVerifyResponse,
} from './resources/transfer';
import {
  TransferRecipientCreate,
  Transferrecipient,
  TransferrecipientCreateBulkParams,
  TransferrecipientCreateBulkResponse,
  TransferrecipientCreateParams,
  TransferrecipientCreateResponse,
  TransferrecipientDeleteResponse,
  TransferrecipientListParams,
  TransferrecipientListResponse,
  TransferrecipientRetrieveResponse,
  TransferrecipientUpdateParams,
  TransferrecipientUpdateResponse,
} from './resources/transferrecipient';
import { ApplePay } from './resources/apple-pay/apple-pay';
import {
  Customer,
  CustomerCreateParams,
  CustomerCreateResponse,
  CustomerFetchMandateAuthorizationsResponse,
  CustomerInitializeDirectDebitParams,
  CustomerInitializeDirectDebitResponse,
  CustomerListParams,
  CustomerListResponse,
  CustomerRetrieveResponse,
  CustomerSetRiskActionParams,
  CustomerSetRiskActionResponse,
  CustomerTriggerActivationChargeParams,
  CustomerTriggerActivationChargeResponse,
  CustomerUpdateParams,
  CustomerUpdateResponse,
  CustomerValidateParams,
  CustomerValidateResponse,
} from './resources/customer/customer';
import {
  DedicatedAccount,
  DedicatedAccountAssignParams,
  DedicatedAccountAssignResponse,
  DedicatedAccountCreateParams,
  DedicatedAccountCreateResponse,
  DedicatedAccountDeleteResponse,
  DedicatedAccountFetchProvidersResponse,
  DedicatedAccountListParams,
  DedicatedAccountListResponse,
  DedicatedAccountRequeryParams,
  DedicatedAccountRequeryResponse,
  DedicatedAccountRetrieveResponse,
} from './resources/dedicated-account/dedicated-account';
import { Integration } from './resources/integration/integration';
import {
  Split,
  SplitCreate,
  SplitCreateParams,
  SplitCreateResponse,
  SplitListParams,
  SplitListResponse,
  SplitRetrieveResponse,
  SplitSubaccountsArray,
  SplitUpdateParams,
  SplitUpdateResponse,
} from './resources/split/split';
import {
  Storefront,
  StorefrontCreateParams,
  StorefrontCreateResponse,
  StorefrontDeleteResponse,
  StorefrontDuplicateResponse,
  StorefrontFetchOrdersResponse,
  StorefrontListParams,
  StorefrontListResponse,
  StorefrontPublishResponse,
  StorefrontRetrieveResponse,
  StorefrontUpdateParams,
  StorefrontUpdateResponse,
  StorefrontVerifySlugResponse,
} from './resources/storefront/storefront';
import {
  Subscription,
  SubscriptionCreateParams,
  SubscriptionCreateResponse,
  SubscriptionDisableParams,
  SubscriptionDisableResponse,
  SubscriptionEnableParams,
  SubscriptionEnableResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionRetrieveResponse,
  SubscriptionToggle,
} from './resources/subscription/subscription';
import {
  Terminal,
  TerminalActivationToggle,
  TerminalCommissionParams,
  TerminalCommissionResponse,
  TerminalDecommissionParams,
  TerminalDecommissionResponse,
  TerminalFetchStatusResponse,
  TerminalListParams,
  TerminalListResponse,
  TerminalRetrieveResponse,
  TerminalUpdateParams,
  TerminalUpdateResponse,
} from './resources/terminal/terminal';
import {
  VirtualTerminal,
  VirtualTerminalCreateParams,
  VirtualTerminalCreateResponse,
  VirtualTerminalDeactivateResponse,
  VirtualTerminalListParams,
  VirtualTerminalListResponse,
  VirtualTerminalRetrieveResponse,
  VirtualTerminalUpdateParams,
  VirtualTerminalUpdateResponse,
} from './resources/virtual-terminal/virtual-terminal';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Secret key in the format sk_domain_xxxxxx
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['PAYSTACK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['PAYSTACK_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Paystack API.
 */
export class Paystack {
  apiKey: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Paystack API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['PAYSTACK_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['PAYSTACK_BASE_URL'] ?? https://api.paystack.co] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('PAYSTACK_BASE_URL'),
    apiKey = readEnv('PAYSTACK_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.PaystackError(
        "The PAYSTACK_API_KEY environment variable is missing or empty; either provide it, or instantiate the Paystack client with an apiKey option, like new Paystack({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.paystack.co`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? Paystack.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('PAYSTACK_LOG'), "process.env['PAYSTACK_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.paystack.co';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  /**
   * Basic re-implementation of `qs.stringify` for primitive types.
   */
  protected stringifyQuery(query: Record<string, unknown>): string {
    return Object.entries(query)
      .filter(([_, value]) => typeof value !== 'undefined')
      .map(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        if (value === null) {
          return `${encodeURIComponent(key)}=`;
        }
        throw new Errors.PaystackError(
          `Cannot stringify type ${typeof value}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
        );
      })
      .join('&');
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Paystack = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static PaystackError = Errors.PaystackError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  transaction: API.Transaction = new API.Transaction(this);
  charge: API.Charge = new API.Charge(this);
  bulkcharge: API.Bulkcharge = new API.Bulkcharge(this);
  subaccount: API.Subaccount = new API.Subaccount(this);
  split: API.Split = new API.Split(this);
  terminal: API.Terminal = new API.Terminal(this);
  virtualTerminal: API.VirtualTerminal = new API.VirtualTerminal(this);
  customer: API.Customer = new API.Customer(this);
  directdebit: API.Directdebit = new API.Directdebit(this);
  dedicatedAccount: API.DedicatedAccount = new API.DedicatedAccount(this);
  applePay: API.ApplePay = new API.ApplePay(this);
  plan: API.Plan = new API.Plan(this);
  subscription: API.Subscription = new API.Subscription(this);
  transferrecipient: API.Transferrecipient = new API.Transferrecipient(this);
  transfer: API.Transfer = new API.Transfer(this);
  balance: API.Balance = new API.Balance(this);
  paymentrequest: API.Paymentrequest = new API.Paymentrequest(this);
  product: API.Product = new API.Product(this);
  storefront: API.Storefront = new API.Storefront(this);
  order: API.Order = new API.Order(this);
  page: API.Page = new API.Page(this);
  settlement: API.Settlement = new API.Settlement(this);
  integration: API.Integration = new API.Integration(this);
  refund: API.Refund = new API.Refund(this);
  dispute: API.Dispute = new API.Dispute(this);
  bank: API.Bank = new API.Bank(this);
  decision: API.Decision = new API.Decision(this);
  country: API.Country = new API.Country(this);
  addressVerification: API.AddressVerification = new API.AddressVerification(this);
}

Paystack.Transaction = Transaction;
Paystack.Charge = Charge;
Paystack.Bulkcharge = Bulkcharge;
Paystack.Subaccount = Subaccount;
Paystack.Split = Split;
Paystack.Terminal = Terminal;
Paystack.VirtualTerminal = VirtualTerminal;
Paystack.Customer = Customer;
Paystack.Directdebit = Directdebit;
Paystack.DedicatedAccount = DedicatedAccount;
Paystack.ApplePay = ApplePay;
Paystack.Plan = Plan;
Paystack.Subscription = Subscription;
Paystack.Transferrecipient = Transferrecipient;
Paystack.Transfer = Transfer;
Paystack.Balance = Balance;
Paystack.Paymentrequest = Paymentrequest;
Paystack.Product = Product;
Paystack.Storefront = Storefront;
Paystack.Order = Order;
Paystack.Page = Page;
Paystack.Settlement = Settlement;
Paystack.Integration = Integration;
Paystack.Refund = Refund;
Paystack.Dispute = Dispute;
Paystack.Bank = Bank;
Paystack.Decision = Decision;
Paystack.Country = Country;
Paystack.AddressVerification = AddressVerification;

export declare namespace Paystack {
  export type RequestOptions = Opts.RequestOptions;

  export {
    Transaction as Transaction,
    type Currency as Currency,
    type MetadataCustomFields as MetadataCustomFields,
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionChargeAuthorizationResponse as TransactionChargeAuthorizationResponse,
    type TransactionExportResponse as TransactionExportResponse,
    type TransactionFetchTimelineResponse as TransactionFetchTimelineResponse,
    type TransactionGetTotalsResponse as TransactionGetTotalsResponse,
    type TransactionInitializeResponse as TransactionInitializeResponse,
    type TransactionPartialDebitResponse as TransactionPartialDebitResponse,
    type TransactionVerifyResponse as TransactionVerifyResponse,
    type TransactionListParams as TransactionListParams,
    type TransactionChargeAuthorizationParams as TransactionChargeAuthorizationParams,
    type TransactionExportParams as TransactionExportParams,
    type TransactionGetTotalsParams as TransactionGetTotalsParams,
    type TransactionInitializeParams as TransactionInitializeParams,
    type TransactionPartialDebitParams as TransactionPartialDebitParams,
  };

  export {
    Charge as Charge,
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

  export {
    Bulkcharge as Bulkcharge,
    type BulkchargeCreateResponse as BulkchargeCreateResponse,
    type BulkchargeRetrieveResponse as BulkchargeRetrieveResponse,
    type BulkchargeListResponse as BulkchargeListResponse,
    type BulkchargeListChargesResponse as BulkchargeListChargesResponse,
    type BulkchargePauseResponse as BulkchargePauseResponse,
    type BulkchargeResumeResponse as BulkchargeResumeResponse,
    type BulkchargeCreateParams as BulkchargeCreateParams,
    type BulkchargeListParams as BulkchargeListParams,
    type BulkchargeListChargesParams as BulkchargeListChargesParams,
  };

  export {
    Subaccount as Subaccount,
    type SubaccountCreateResponse as SubaccountCreateResponse,
    type SubaccountRetrieveResponse as SubaccountRetrieveResponse,
    type SubaccountUpdateResponse as SubaccountUpdateResponse,
    type SubaccountListResponse as SubaccountListResponse,
    type SubaccountCreateParams as SubaccountCreateParams,
    type SubaccountUpdateParams as SubaccountUpdateParams,
    type SubaccountListParams as SubaccountListParams,
  };

  export {
    Split as Split,
    type SplitCreate as SplitCreate,
    type SplitSubaccountsArray as SplitSubaccountsArray,
    type SplitCreateResponse as SplitCreateResponse,
    type SplitRetrieveResponse as SplitRetrieveResponse,
    type SplitUpdateResponse as SplitUpdateResponse,
    type SplitListResponse as SplitListResponse,
    type SplitCreateParams as SplitCreateParams,
    type SplitUpdateParams as SplitUpdateParams,
    type SplitListParams as SplitListParams,
  };

  export {
    Terminal as Terminal,
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
    VirtualTerminal as VirtualTerminal,
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
    Customer as Customer,
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerFetchMandateAuthorizationsResponse as CustomerFetchMandateAuthorizationsResponse,
    type CustomerInitializeDirectDebitResponse as CustomerInitializeDirectDebitResponse,
    type CustomerSetRiskActionResponse as CustomerSetRiskActionResponse,
    type CustomerTriggerActivationChargeResponse as CustomerTriggerActivationChargeResponse,
    type CustomerValidateResponse as CustomerValidateResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerInitializeDirectDebitParams as CustomerInitializeDirectDebitParams,
    type CustomerSetRiskActionParams as CustomerSetRiskActionParams,
    type CustomerTriggerActivationChargeParams as CustomerTriggerActivationChargeParams,
    type CustomerValidateParams as CustomerValidateParams,
  };

  export {
    Directdebit as Directdebit,
    type DirectdebitListMandateAuthorizationsResponse as DirectdebitListMandateAuthorizationsResponse,
    type DirectdebitTriggerActivationChargeResponse as DirectdebitTriggerActivationChargeResponse,
    type DirectdebitListMandateAuthorizationsParams as DirectdebitListMandateAuthorizationsParams,
    type DirectdebitTriggerActivationChargeParams as DirectdebitTriggerActivationChargeParams,
  };

  export {
    DedicatedAccount as DedicatedAccount,
    type DedicatedAccountCreateResponse as DedicatedAccountCreateResponse,
    type DedicatedAccountRetrieveResponse as DedicatedAccountRetrieveResponse,
    type DedicatedAccountListResponse as DedicatedAccountListResponse,
    type DedicatedAccountDeleteResponse as DedicatedAccountDeleteResponse,
    type DedicatedAccountAssignResponse as DedicatedAccountAssignResponse,
    type DedicatedAccountFetchProvidersResponse as DedicatedAccountFetchProvidersResponse,
    type DedicatedAccountRequeryResponse as DedicatedAccountRequeryResponse,
    type DedicatedAccountCreateParams as DedicatedAccountCreateParams,
    type DedicatedAccountListParams as DedicatedAccountListParams,
    type DedicatedAccountAssignParams as DedicatedAccountAssignParams,
    type DedicatedAccountRequeryParams as DedicatedAccountRequeryParams,
  };

  export { ApplePay as ApplePay };

  export {
    Plan as Plan,
    type PlanCreateResponse as PlanCreateResponse,
    type PlanRetrieveResponse as PlanRetrieveResponse,
    type PlanUpdateResponse as PlanUpdateResponse,
    type PlanListResponse as PlanListResponse,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
  };

  export {
    Subscription as Subscription,
    type SubscriptionToggle as SubscriptionToggle,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionRetrieveResponse as SubscriptionRetrieveResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDisableResponse as SubscriptionDisableResponse,
    type SubscriptionEnableResponse as SubscriptionEnableResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDisableParams as SubscriptionDisableParams,
    type SubscriptionEnableParams as SubscriptionEnableParams,
  };

  export {
    Transferrecipient as Transferrecipient,
    type TransferRecipientCreate as TransferRecipientCreate,
    type TransferrecipientCreateResponse as TransferrecipientCreateResponse,
    type TransferrecipientRetrieveResponse as TransferrecipientRetrieveResponse,
    type TransferrecipientUpdateResponse as TransferrecipientUpdateResponse,
    type TransferrecipientListResponse as TransferrecipientListResponse,
    type TransferrecipientDeleteResponse as TransferrecipientDeleteResponse,
    type TransferrecipientCreateBulkResponse as TransferrecipientCreateBulkResponse,
    type TransferrecipientCreateParams as TransferrecipientCreateParams,
    type TransferrecipientUpdateParams as TransferrecipientUpdateParams,
    type TransferrecipientListParams as TransferrecipientListParams,
    type TransferrecipientCreateBulkParams as TransferrecipientCreateBulkParams,
  };

  export {
    Transfer as Transfer,
    type TransferBase as TransferBase,
    type TransferListResponse as TransferListResponse,
    type TransferDisableOtpResponse as TransferDisableOtpResponse,
    type TransferEnableOtpResponse as TransferEnableOtpResponse,
    type TransferExportResponse as TransferExportResponse,
    type TransferFetchResponse as TransferFetchResponse,
    type TransferFinalizeResponse as TransferFinalizeResponse,
    type TransferFinalizeDisableOtpResponse as TransferFinalizeDisableOtpResponse,
    type TransferInitiateResponse as TransferInitiateResponse,
    type TransferInitiateBulkResponse as TransferInitiateBulkResponse,
    type TransferResendOtpResponse as TransferResendOtpResponse,
    type TransferVerifyResponse as TransferVerifyResponse,
    type TransferListParams as TransferListParams,
    type TransferExportParams as TransferExportParams,
    type TransferFinalizeParams as TransferFinalizeParams,
    type TransferFinalizeDisableOtpParams as TransferFinalizeDisableOtpParams,
    type TransferInitiateParams as TransferInitiateParams,
    type TransferInitiateBulkParams as TransferInitiateBulkParams,
    type TransferResendOtpParams as TransferResendOtpParams,
  };

  export {
    Balance as Balance,
    type BalanceFetchResponse as BalanceFetchResponse,
    type BalanceFetchLedgerResponse as BalanceFetchLedgerResponse,
    type BalanceFetchLedgerParams as BalanceFetchLedgerParams,
  };

  export {
    Paymentrequest as Paymentrequest,
    type PaymentRequestLineItemsArray as PaymentRequestLineItemsArray,
    type PaymentRequestTaxArray as PaymentRequestTaxArray,
    type PaymentrequestCreateResponse as PaymentrequestCreateResponse,
    type PaymentrequestRetrieveResponse as PaymentrequestRetrieveResponse,
    type PaymentrequestUpdateResponse as PaymentrequestUpdateResponse,
    type PaymentrequestListResponse as PaymentrequestListResponse,
    type PaymentrequestArchiveResponse as PaymentrequestArchiveResponse,
    type PaymentrequestFinalizeResponse as PaymentrequestFinalizeResponse,
    type PaymentrequestGetTotalsResponse as PaymentrequestGetTotalsResponse,
    type PaymentrequestSendNotificationResponse as PaymentrequestSendNotificationResponse,
    type PaymentrequestVerifyResponse as PaymentrequestVerifyResponse,
    type PaymentrequestCreateParams as PaymentrequestCreateParams,
    type PaymentrequestUpdateParams as PaymentrequestUpdateParams,
    type PaymentrequestListParams as PaymentrequestListParams,
  };

  export {
    Product as Product,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductDeleteResponse as ProductDeleteResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };

  export {
    Storefront as Storefront,
    type StorefrontCreateResponse as StorefrontCreateResponse,
    type StorefrontRetrieveResponse as StorefrontRetrieveResponse,
    type StorefrontUpdateResponse as StorefrontUpdateResponse,
    type StorefrontListResponse as StorefrontListResponse,
    type StorefrontDeleteResponse as StorefrontDeleteResponse,
    type StorefrontDuplicateResponse as StorefrontDuplicateResponse,
    type StorefrontFetchOrdersResponse as StorefrontFetchOrdersResponse,
    type StorefrontPublishResponse as StorefrontPublishResponse,
    type StorefrontVerifySlugResponse as StorefrontVerifySlugResponse,
    type StorefrontCreateParams as StorefrontCreateParams,
    type StorefrontUpdateParams as StorefrontUpdateParams,
    type StorefrontListParams as StorefrontListParams,
  };

  export {
    Order as Order,
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderListResponse as OrderListResponse,
    type OrderFetchProductOrdersResponse as OrderFetchProductOrdersResponse,
    type OrderValidateResponse as OrderValidateResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderListParams as OrderListParams,
  };

  export {
    Page as Page,
    type PageCreateResponse as PageCreateResponse,
    type PageRetrieveResponse as PageRetrieveResponse,
    type PageUpdateResponse as PageUpdateResponse,
    type PageListResponse as PageListResponse,
    type PageAddProductResponse as PageAddProductResponse,
    type PageCheckSlugAvailabilityResponse as PageCheckSlugAvailabilityResponse,
    type PageCreateParams as PageCreateParams,
    type PageUpdateParams as PageUpdateParams,
    type PageListParams as PageListParams,
    type PageAddProductParams as PageAddProductParams,
  };

  export {
    Settlement as Settlement,
    type SettlementListResponse as SettlementListResponse,
    type SettlementRetrieveTransactionsResponse as SettlementRetrieveTransactionsResponse,
    type SettlementListParams as SettlementListParams,
  };

  export { Integration as Integration };

  export {
    Refund as Refund,
    type RefundCreateResponse as RefundCreateResponse,
    type RefundRetrieveResponse as RefundRetrieveResponse,
    type RefundListResponse as RefundListResponse,
    type RefundRetryWithCustomerDetailsResponse as RefundRetryWithCustomerDetailsResponse,
    type RefundCreateParams as RefundCreateParams,
    type RefundListParams as RefundListParams,
    type RefundRetryWithCustomerDetailsParams as RefundRetryWithCustomerDetailsParams,
  };

  export {
    Dispute as Dispute,
    type DisputeHistoryArray as DisputeHistoryArray,
    type DisputeMessagesArray as DisputeMessagesArray,
    type DisputeRetrieveResponse as DisputeRetrieveResponse,
    type DisputeUpdateResponse as DisputeUpdateResponse,
    type DisputeListResponse as DisputeListResponse,
    type DisputeAddEvidenceResponse as DisputeAddEvidenceResponse,
    type DisputeExportResponse as DisputeExportResponse,
    type DisputeFetchUploadURLResponse as DisputeFetchUploadURLResponse,
    type DisputeListTransactionDisputesResponse as DisputeListTransactionDisputesResponse,
    type DisputeResolveResponse as DisputeResolveResponse,
    type DisputeUpdateParams as DisputeUpdateParams,
    type DisputeListParams as DisputeListParams,
    type DisputeAddEvidenceParams as DisputeAddEvidenceParams,
    type DisputeExportParams as DisputeExportParams,
    type DisputeResolveParams as DisputeResolveParams,
  };

  export {
    Bank as Bank,
    type BankListResponse as BankListResponse,
    type BankResolveAccountResponse as BankResolveAccountResponse,
    type BankValidateAccountResponse as BankValidateAccountResponse,
    type BankListParams as BankListParams,
    type BankResolveAccountParams as BankResolveAccountParams,
    type BankValidateAccountParams as BankValidateAccountParams,
  };

  export { Decision as Decision, type DecisionResolveBinResponse as DecisionResolveBinResponse };

  export { Country as Country, type CountryListResponse as CountryListResponse };

  export {
    AddressVerification as AddressVerification,
    type AddressVerificationListStatesResponse as AddressVerificationListStatesResponse,
    type AddressVerificationListStatesParams as AddressVerificationListStatesParams,
  };
}
