// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource refund', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.refund.create({ transaction: 'mpkr39h74k' });
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
    const response = await client.refund.create({
      transaction: 'mpkr39h74k',
      amount: 0,
      currency: 'GHS',
      customer_note: 'customer_note',
      merchant_note: 'merchant_note',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.refund.retrieve(15581137);
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
    const responsePromise = client.refund.list();
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
      client.refund.list(
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
  test.skip('retryWithCustomerDetails: only required params', async () => {
    const responsePromise = client.refund.retryWithCustomerDetails(15581137, {
      refund_account_details: {
        account_number: '1234567890',
        bank_id: '9',
        currency: 'NGN',
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
  test.skip('retryWithCustomerDetails: required and optional params', async () => {
    const response = await client.refund.retryWithCustomerDetails(15581137, {
      refund_account_details: {
        account_number: '1234567890',
        bank_id: '9',
        currency: 'NGN',
      },
    });
  });
});
