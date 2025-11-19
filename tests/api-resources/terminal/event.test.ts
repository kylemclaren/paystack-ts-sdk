// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource event', () => {
  // Prism tests are disabled
  test.skip('fetchStatus: only required params', async () => {
    const responsePromise = client.terminal.event.fetchStatus('616d721e8c5cd40a0cdd54a6', {
      terminal_id: 'Z0R4orOU',
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
  test.skip('fetchStatus: required and optional params', async () => {
    const response = await client.terminal.event.fetchStatus('616d721e8c5cd40a0cdd54a6', {
      terminal_id: 'Z0R4orOU',
    });
  });

  // Prism tests are disabled
  test.skip('send', async () => {
    const responsePromise = client.terminal.event.send('Z0R4orOU');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('send: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.terminal.event.send(
        'Z0R4orOU',
        { action: 'process', data: { id: 7895939, reference: '4634337895939' }, type: 'invoice' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });
});
