// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transaction', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.transaction.retrieve(4099260516);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.transaction.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transaction.list(
        {
          amount: 0,
          channel: 'card',
          customer_code: 'customer_code',
          from: '2019-12-27T18:11:19.117Z',
          next: 'next',
          page: 0,
          per_page: 0,
          previous: 'previous',
          settlement: 0,
          source: 'merchantApi',
          split_code: 'split_code',
          status: 'success',
          subaccount_code: 'subaccount_code',
          terminal_id: 'terminal_id',
          to: '2019-12-27T18:11:19.117Z',
          use_cursor: true,
          virtual_account_number: 'virtual_account_number',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('chargeAuthorization: only required params', async () => {
    const responsePromise = client.transaction.chargeAuthorization({
      amount: 30000,
      authorization_code: 'AUTH_df1l5ehnym',
      email: 'jb@email.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('chargeAuthorization: required and optional params', async () => {
    const response = await client.transaction.chargeAuthorization({
      amount: 30000,
      authorization_code: 'AUTH_df1l5ehnym',
      email: 'jb@email.com',
      bearer: 'account',
      currency: 'GHS',
      metadata: 'metadata',
      queue: true,
      reference: 'reference',
      split: {
        currency: 'NGN',
        name: 'Halfsies',
        subaccounts: [{ share: 50, subaccount: 'ACCT_6uujpqtzmnufzkw' }],
        type: 'percentage',
        bearer_subaccount: 'bearer_subaccount',
        bearer_type: 'subaccount',
      },
      split_code: 'split_code',
      subaccount: 'subaccount',
      transaction_charge: 'transaction_charge',
    });
  });

  // Prism tests are disabled
  test.skip('export', async () => {
    const responsePromise = client.transaction.export();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('export: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transaction.export(
        {
          customer: 0,
          from: '2019-12-27T18:11:19.117Z',
          settlement: 0,
          status: 'success',
          subaccount_code: 'subaccount_code',
          to: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('fetchTimeline', async () => {
    const responsePromise = client.transaction.fetchTimeline(3936799950);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTotals', async () => {
    const responsePromise = client.transaction.getTotals();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTotals: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transaction.getTotals(
        { from: '2019-12-27T18:11:19.117Z', to: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('initialize: only required params', async () => {
    const responsePromise = client.transaction.initialize({ amount: 10000, email: 'test@demo.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('initialize: required and optional params', async () => {
    const response = await client.transaction.initialize({
      amount: 10000,
      email: 'test@demo.com',
      bearer: 'account',
      callback_url: 'callback_url',
      channels: ['card'],
      currency: 'GHS',
      invoice_limit: 0,
      label: 'label',
      metadata: {},
      plan: 'plan',
      reference: 'reference',
      split: {
        currency: 'NGN',
        name: 'Halfsies',
        subaccounts: [{ share: 50, subaccount: 'ACCT_6uujpqtzmnufzkw' }],
        type: 'percentage',
        bearer_subaccount: 'bearer_subaccount',
        bearer_type: 'subaccount',
      },
      split_code: 'split_code',
      subaccount: 'subaccount',
      transaction_charge: 'transaction_charge',
    });
  });

  // Prism tests are disabled
  test.skip('partialDebit: only required params', async () => {
    const responsePromise = client.transaction.partialDebit({
      amount: 40510,
      authorization_code: 'AUTH_df1l5ehnym',
      currency: 'ZAR',
      email: 'tap@email.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('partialDebit: required and optional params', async () => {
    const response = await client.transaction.partialDebit({
      amount: 40510,
      authorization_code: 'AUTH_df1l5ehnym',
      currency: 'ZAR',
      email: 'tap@email.com',
      at_least: 'at_least',
      reference: 'reference',
    });
  });

  // Prism tests are disabled
  test.skip('verify', async () => {
    const responsePromise = client.transaction.verify('re4lyvq3s3');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
