// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customer', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.customer.create({ email: 'rock@sandy.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.customer.create({
      email: 'rock@sandy.com',
      first_name: 'Rock',
      last_name: 'Sandy',
      metadata: 'metadata',
      phone: 'phone',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.customer.retrieve('CUS_c6wqvwmvwopw4ms');
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
    const responsePromise = client.customer.update('CUS_c6wqvwmvwopw4ms');
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
      client.customer.update(
        'CUS_c6wqvwmvwopw4ms',
        { first_name: 'Cecilia', last_name: 'Jones', metadata: 'metadata', phone: 'phone' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.customer.list();
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
      client.customer.list(
        {
          from: '2019-12-27T18:11:19.117Z',
          next: 'next',
          page: 'page',
          perPage: 'perPage',
          previous: 'previous',
          to: '2019-12-27T18:11:19.117Z',
          use_cursor: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('fetchMandateAuthorizations', async () => {
    const responsePromise = client.customer.fetchMandateAuthorizations(297346561);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('initializeDirectDebit: only required params', async () => {
    const responsePromise = client.customer.initializeDirectDebit(297346561, {
      account: { bank_code: '058', number: '0123456789' },
      address: { city: 'Ikeja', state: 'Lagos', street: 'Some Where' },
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
  test.skip('initializeDirectDebit: required and optional params', async () => {
    const response = await client.customer.initializeDirectDebit(297346561, {
      account: { bank_code: '058', number: '0123456789' },
      address: { city: 'Ikeja', state: 'Lagos', street: 'Some Where' },
    });
  });

  // Prism tests are disabled
  test.skip('setRiskAction: only required params', async () => {
    const responsePromise = client.customer.setRiskAction({ customer: 'CUS_c6wqvwmvwopw4ms' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('setRiskAction: required and optional params', async () => {
    const response = await client.customer.setRiskAction({
      customer: 'CUS_c6wqvwmvwopw4ms',
      risk_action: 'deny',
    });
  });

  // Prism tests are disabled
  test.skip('triggerActivationCharge: only required params', async () => {
    const responsePromise = client.customer.triggerActivationCharge(297346561, {
      authorization_id: 1069309917,
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
  test.skip('triggerActivationCharge: required and optional params', async () => {
    const response = await client.customer.triggerActivationCharge(297346561, {
      authorization_id: 1069309917,
    });
  });

  // Prism tests are disabled
  test.skip('validate: only required params', async () => {
    const responsePromise = client.customer.validate('CUS_c6wqvwmvwopw4ms', {
      account_number: '0123456789',
      bank_code: '007',
      bvn: '20012345677',
      country: 'NG',
      first_name: 'Jabal',
      last_name: 'Cedar',
      type: 'bank_account',
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
  test.skip('validate: required and optional params', async () => {
    const response = await client.customer.validate('CUS_c6wqvwmvwopw4ms', {
      account_number: '0123456789',
      bank_code: '007',
      bvn: '20012345677',
      country: 'NG',
      first_name: 'Jabal',
      last_name: 'Cedar',
      type: 'bank_account',
      middle_name: 'middle_name',
      value: 'value',
    });
  });
});
