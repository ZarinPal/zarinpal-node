import { Zarinpal } from './core/Zarinpal';

const zarinpal = new Zarinpal({});
console.log(zarinpal);

const args = {
  merchant_id: 'eaba8cac-4f12-11e6-968e-000c295eb8fc',
  amount: 10000,
  description: 'test',
  callback_url: 'google.com',
};

zarinpal.pg.new(args);
