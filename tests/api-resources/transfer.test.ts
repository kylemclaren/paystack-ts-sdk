// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transfer', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.transfer.list();
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
      client.transfer.list(
        {
          from: '2019-12-27T18:11:19.117Z',
          next: 'next',
          page: 0,
          per_page: 0,
          previous: 'previous',
          recipient: 'recipient',
          status: 'pending',
          to: '2019-12-27T18:11:19.117Z',
          use_cursor: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('disableOtp', async () => {
    const responsePromise = client.transfer.disableOtp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('enableOtp', async () => {
    const responsePromise = client.transfer.enableOtp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('export', async () => {
    const responsePromise = client.transfer.export();
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
      client.transfer.export(
        {
          from: '2019-12-27T18:11:19.117Z',
          recipient: 'recipient',
          status: 'pending',
          to: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('fetch', async () => {
    const responsePromise = client.transfer.fetch('TRF_1ptvuv321ahaa7q');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('finalize: only required params', async () => {
    const responsePromise = client.transfer.finalize({ otp: '928783', transfer_code: 'TRF_vsyqdmlzble3uii' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('finalize: required and optional params', async () => {
    const response = await client.transfer.finalize({ otp: '928783', transfer_code: 'TRF_vsyqdmlzble3uii' });
  });

  // Prism tests are disabled
  test.skip('finalizeDisableOtp: only required params', async () => {
    const responsePromise = client.transfer.finalizeDisableOtp({ otp: '928783' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('finalizeDisableOtp: required and optional params', async () => {
    const response = await client.transfer.finalizeDisableOtp({ otp: '928783' });
  });

  // Prism tests are disabled
  test.skip('initiate: only required params', async () => {
    const responsePromise = client.transfer.initiate({
      amount: 0,
      recipient: 'recipient',
      reference: 'reference',
      source: 'source',
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
  test.skip('initiate: required and optional params', async () => {
    const response = await client.transfer.initiate({
      amount: 0,
      recipient: 'recipient',
      reference: 'reference',
      source: 'source',
      currency: 'NGN',
      reason: 'reason',
    });
  });

  // Prism tests are disabled
  test.skip('initiateBulk: only required params', async () => {
    const responsePromise = client.transfer.initiateBulk({
      source: 'balance',
      transfers: [
        {
          amount: 120000,
          recipient: 'RCP_gd9vgag7n5lr5ix',
          reference: 'acv_9ee55786-2323-4760-98e2-6380c9cb3f68',
        },
      ],
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
  test.skip('initiateBulk: required and optional params', async () => {
    const response = await client.transfer.initiateBulk({
      source: 'balance',
      transfers: [
        {
          amount: 120000,
          recipient: 'RCP_gd9vgag7n5lr5ix',
          reference: 'acv_9ee55786-2323-4760-98e2-6380c9cb3f68',
          reason: 'reason',
        },
      ],
      currency: 'NGN',
    });
  });

  // Prism tests are disabled
  test.skip('resendOtp: only required params', async () => {
    const responsePromise = client.transfer.resendOtp({
      reason: 'resend_otp',
      transfer_code: 'TRF_vsyqdmlzble3uii',
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
  test.skip('resendOtp: required and optional params', async () => {
    const response = await client.transfer.resendOtp({
      reason: 'resend_otp',
      transfer_code: 'TRF_vsyqdmlzble3uii',
    });
  });

  // Prism tests are disabled
  test.skip('verify', async () => {
    const responsePromise = client.transfer.verify('acv_9ee55786-2323-4760-98e2-6380c9cb3f67');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
