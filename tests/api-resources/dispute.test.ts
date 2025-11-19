// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dispute', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.dispute.retrieve(1801929);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.dispute.update(1801929, { refund_amount: 50000 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.dispute.update(1801929, {
      refund_amount: 50000,
      uploaded_filename: 'uploaded_filename',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.dispute.list();
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
      client.dispute.list(
        {
          from: '2019-12-27T18:11:19.117Z',
          page: 0,
          perPage: 0,
          status: 'awaiting-merchant-feedback',
          to: '2019-12-27T18:11:19.117Z',
          transaction: 'transaction',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('addEvidence: only required params', async () => {
    const responsePromise = client.dispute.addEvidence(4734583785, {
      customer_email: 'customer@email.com',
      customer_name: 'Mensah King',
      customer_phone: '08012345678',
      service_details: 'claim for buying cups',
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
  test.skip('addEvidence: required and optional params', async () => {
    const response = await client.dispute.addEvidence(4734583785, {
      customer_email: 'customer@email.com',
      customer_name: 'Mensah King',
      customer_phone: '08012345678',
      service_details: 'claim for buying cups',
      delivery_address: 'delivery_address',
      delivery_date: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('export', async () => {
    const responsePromise = client.dispute.export();
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
      client.dispute.export(
        {
          from: '2019-12-27T18:11:19.117Z',
          page: 0,
          perPage: 0,
          status: 'awaiting-merchant-feedback',
          to: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('fetchUploadURL', async () => {
    const responsePromise = client.dispute.fetchUploadURL(4734583785);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listTransactionDisputes', async () => {
    const responsePromise = client.dispute.listTransactionDisputes(4734583785);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('resolve: only required params', async () => {
    const responsePromise = client.dispute.resolve(4734583785, {
      message: 'Merchant accepted',
      refund_amount: 50000,
      resolution: 'merchant-accepted',
      uploaded_filename: 'qesp8a4df1xejihd9x5q',
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
  test.skip('resolve: required and optional params', async () => {
    const response = await client.dispute.resolve(4734583785, {
      message: 'Merchant accepted',
      refund_amount: 50000,
      resolution: 'merchant-accepted',
      uploaded_filename: 'qesp8a4df1xejihd9x5q',
      evidence: 0,
    });
  });
});
