import { Zarinpal } from '../core/Zarinpal';
import { test, expect } from '@jest/globals';

test('create new PG successfully', async () => {
  const args = {
    merchant_id: '6c64a645-1b28-4956-b32e-7b777864121a',
    amount: 10000,
    description: 'test',
    callback_url: 'google.com',
    metadata: {
      mobile: '09351204497',
    },
  };
  const zarinpal = new Zarinpal({});
  const res = await zarinpal.pg.newPayment(args);
  expect(res).toContain('https://www.zarinpal.com/pg/StartPay/');
});

test('verify PG', async () => {
  const args = {
    amount: 10000,
    authority: 'A00000000000000000000000000482585518',
    merchant_id: '6c64a645-1b28-4956-b32e-7b777864121a',
  };
  const zarinpal = new Zarinpal({});
  const res = await zarinpal.pg.verify(args);
  expect(res).toMatchObject({
    code: -51,
    message: 'Session is not valid, session is not active paid try.',
  });
});
