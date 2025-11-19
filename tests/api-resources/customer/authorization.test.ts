// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource authorization', () => {
  // Prism tests are disabled
  test.skip('deactivate: only required params', async () => {
    const responsePromise = client.customer.authorization.deactivate({
      authorization_code: 'AUTH_xxxIjkZVj5',
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
  test.skip('deactivate: required and optional params', async () => {
    const response = await client.customer.authorization.deactivate({
      authorization_code: 'AUTH_xxxIjkZVj5',
    });
  });

  // Prism tests are disabled
  test.skip('initialize: only required params', async () => {
    const responsePromise = client.customer.authorization.initialize({
      channel: 'direct_debit',
      email: 'ravi@demo.com',
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
  test.skip('initialize: required and optional params', async () => {
    const response = await client.customer.authorization.initialize({
      channel: 'direct_debit',
      email: 'ravi@demo.com',
      account: { bank_code: '058', number: '0123456789' },
      address: { city: 'Lagos', state: 'Lagos', street: '123 Main Street' },
      callback_url: 'http://test.url.com',
    });
  });

  // Prism tests are disabled
  test.skip('verify', async () => {
    const responsePromise = client.customer.authorization.verify('dfbzfotsrbv4n5s82t4mp5b5mfn51h');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
