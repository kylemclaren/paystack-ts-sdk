// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bank', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.bank.list();
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
      client.bank.list(
        {
          country: 'ghana',
          currency: 'GHS',
          enabled_for_verification: true,
          gateway: 'emandate',
          include_nip_sort_code: true,
          next: 'next',
          page: 0,
          pay_with_bank: true,
          pay_with_bank_transfer: true,
          perPage: 0,
          previous: 'previous',
          type: 'ghipps',
          use_cursor: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('resolveAccount', async () => {
    const responsePromise = client.bank.resolveAccount();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('resolveAccount: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bank.resolveAccount({ account_number: 0, bank_code: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('validateAccount: only required params', async () => {
    const responsePromise = client.bank.validateAccount({
      account_name: 'Ann Bron',
      account_number: '0123456789',
      account_type: 'personal',
      bank_code: '632005',
      country_code: 'ZA',
      document_type: 'identityNumber',
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
  test.skip('validateAccount: required and optional params', async () => {
    const response = await client.bank.validateAccount({
      account_name: 'Ann Bron',
      account_number: '0123456789',
      account_type: 'personal',
      bank_code: '632005',
      country_code: 'ZA',
      document_type: 'identityNumber',
      document_number: '1234567890123',
    });
  });
});
