// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource order', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.order.create({
      currency: 'NGN',
      email: 'test@email.com',
      first_name: 'Demo',
      items: [{ amount: 2, item: 2179824, quantity: 200000, type: 'product' }],
      last_name: 'User',
      phone: '+2348031245678',
      shipping: {
        city: 'Atlantic',
        country: 'Equator',
        shipping_fee: 10000,
        state: 'Pacific',
        street_line: 'Somewhere on Earth',
      },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.order.create({
      currency: 'NGN',
      email: 'test@email.com',
      first_name: 'Demo',
      items: [{ amount: 2, item: 2179824, quantity: 200000, type: 'product' }],
      last_name: 'User',
      phone: '+2348031245678',
      shipping: {
        city: 'Atlantic',
        country: 'Equator',
        shipping_fee: 10000,
        state: 'Pacific',
        street_line: 'Somewhere on Earth',
        delivery_note: 'delivery_note',
      },
      is_gift: true,
      pay_for_me: true,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.order.retrieve(1559046);
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
    const responsePromise = client.order.list();
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
      client.order.list(
        { from: '2019-12-27T18:11:19.117Z', page: 0, perPage: 0, to: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('fetchProductOrders', async () => {
    const responsePromise = client.order.fetchProductOrders(1559046);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('validate', async () => {
    const responsePromise = client.order.validate('ORD_6z0lqwpmxrm7dsp');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
