// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource destination', () => {
  // Prism tests are disabled
  test.skip('assign: only required params', async () => {
    const responsePromise = client.virtualTerminal.destination.assign('VT_MCK5292Z', {
      destinations: [{}, {}],
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
  test.skip('assign: required and optional params', async () => {
    const response = await client.virtualTerminal.destination.assign('VT_MCK5292Z', {
      destinations: [
        { name: 'John Doe', target: '+2548012345678' },
        { name: 'Jane Smith', target: '+2548098765432' },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('unassign: only required params', async () => {
    const responsePromise = client.virtualTerminal.destination.unassign('VT_MCK5292Z', {
      targets: ['+2548012345678', '+2548098765432'],
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
  test.skip('unassign: required and optional params', async () => {
    const response = await client.virtualTerminal.destination.unassign('VT_MCK5292Z', {
      targets: ['+2548012345678', '+2548098765432'],
    });
  });
});
