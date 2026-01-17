// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource terminal', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.terminal.retrieve('Z0R4orOU');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.terminal.update('Z0R4orOU');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.terminal.update(
        'Z0R4orOU',
        { address: 'Somewhere on earth', name: 'Oreos' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.terminal.list();
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
      client.terminal.list(
        {
          next: 'next',
          per_page: 0,
          previous: 'previous',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('commission: only required params', async () => {
    const responsePromise = client.terminal.commission({ serial_number: '1111150412230003899' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('commission: required and optional params', async () => {
    const response = await client.terminal.commission({ serial_number: '1111150412230003899' });
  });

  // Prism tests are disabled
  test.skip('decommission: only required params', async () => {
    const responsePromise = client.terminal.decommission({ serial_number: '1111150412230003899' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('decommission: required and optional params', async () => {
    const response = await client.terminal.decommission({ serial_number: '1111150412230003899' });
  });

  // Prism tests are disabled
  test.skip('fetchStatus', async () => {
    const responsePromise = client.terminal.fetchStatus('Z0R4orOU');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
