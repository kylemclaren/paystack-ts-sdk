// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource page', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.page.create({ name: 'Extra Charges' });
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
    const response = await client.page.create({
      name: 'Extra Charges',
      amount: 200000,
      collect_phone: true,
      currency: 'NGN',
      custom_fields: [{}],
      description: 'description',
      fixed_amount: true,
      metadata: {},
      notification_email: 'notification_email',
      plan: 'plan',
      redirect_url: 'redirect_url',
      slug: 'slug',
      split_code: 'split_code',
      success_message: 'success_message',
      type: 'payment',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.page.retrieve(1891222);
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
    const responsePromise = client.page.update(1891222);
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
      client.page.update(
        1891222,
        {
          active: true,
          amount: 0,
          description: 'description',
          name: 'Backyard Sale',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.page.list();
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
      client.page.list(
        {
          from: '2019-12-27T18:11:19.117Z',
          page: 0,
          perPage: 0,
          to: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('addProduct: only required params', async () => {
    const responsePromise = client.page.addProduct('id', { products: [2196244, 2179824] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addProduct: required and optional params', async () => {
    const response = await client.page.addProduct('id', { products: [2196244, 2179824] });
  });

  // Prism tests are disabled
  test.skip('checkSlugAvailability', async () => {
    const responsePromise = client.page.checkSlugAvailability('risky-burger');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
