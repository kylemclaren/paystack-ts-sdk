// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource directdebit', () => {
  // Prism tests are disabled
  test.skip('listMandateAuthorizations', async () => {
    const responsePromise = client.directdebit.listMandateAuthorizations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listMandateAuthorizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.directdebit.listMandateAuthorizations(
        {
          cursor: 'cursor',
          per_page: 0,
          status: 'pending',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paystack.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('triggerActivationCharge: only required params', async () => {
    const responsePromise = client.directdebit.triggerActivationCharge({
      customer_ids: [28958104, 983697220],
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
    const response = await client.directdebit.triggerActivationCharge({
      customer_ids: [28958104, 983697220],
    });
  });
});
