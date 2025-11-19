// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paystack from 'paystack';

const client = new Paystack({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource charge', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.charge.create({ amount: 0, email: 'email' });
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
    const response = await client.charge.create({
      amount: 0,
      email: 'email',
      authorization_code: 'authorization_code',
      bank: { account_number: 'account_number', code: 'code' },
      birthday: '2019-12-27',
      device_id: 'device_id',
      eft: { provider: 'provider' },
      metadata: {},
      mobile_money: { phone: 'phone', provider: 'provider' },
      pin: 'pin',
      reference: 'reference',
      ussd: { type: '737' },
    });
  });

  // Prism tests are disabled
  test.skip('checkStatus', async () => {
    const responsePromise = client.charge.checkStatus('5bwib5v6anhe9xa');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submitAddress: only required params', async () => {
    const responsePromise = client.charge.submitAddress({
      address: '140 N 2ND ST',
      city: 'Stroudsburg',
      reference: '5bwib5v6anhe9xa',
      state: 'PA',
      zip_code: '18360',
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
  test.skip('submitAddress: required and optional params', async () => {
    const response = await client.charge.submitAddress({
      address: '140 N 2ND ST',
      city: 'Stroudsburg',
      reference: '5bwib5v6anhe9xa',
      state: 'PA',
      zip_code: '18360',
    });
  });

  // Prism tests are disabled
  test.skip('submitBirthday: only required params', async () => {
    const responsePromise = client.charge.submitBirthday({
      birthday: '1961-09-21',
      reference: '5bwib5v6anhe9xa',
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
  test.skip('submitBirthday: required and optional params', async () => {
    const response = await client.charge.submitBirthday({
      birthday: '1961-09-21',
      reference: '5bwib5v6anhe9xa',
    });
  });

  // Prism tests are disabled
  test.skip('submitOtp: only required params', async () => {
    const responsePromise = client.charge.submitOtp({ otp: '123456', reference: '5bwib5v6anhe9xa' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submitOtp: required and optional params', async () => {
    const response = await client.charge.submitOtp({ otp: '123456', reference: '5bwib5v6anhe9xa' });
  });

  // Prism tests are disabled
  test.skip('submitPhone: only required params', async () => {
    const responsePromise = client.charge.submitPhone({ phone: '08012345678', reference: '5bwib5v6anhe9xa' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submitPhone: required and optional params', async () => {
    const response = await client.charge.submitPhone({ phone: '08012345678', reference: '5bwib5v6anhe9xa' });
  });

  // Prism tests are disabled
  test.skip('submitPin: only required params', async () => {
    const responsePromise = client.charge.submitPin({ pin: '1234', reference: '5bwib5v6anhe9xa' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submitPin: required and optional params', async () => {
    const response = await client.charge.submitPin({ pin: '1234', reference: '5bwib5v6anhe9xa' });
  });
});
