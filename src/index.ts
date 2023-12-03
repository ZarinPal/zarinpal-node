import { Zarinpal } from './core/Zarinpal';

const zarinpal = new Zarinpal({});
console.log(zarinpal);

const args = {
  merchant_id: '6c64a645-1b28-4956-b32e-7b777864121a',
  amount: 10000,
  description: 'test',
  callback_url: 'google.com',
};

(async function () {
  try {
    console.log('**************');
    const redirectUrl = await zarinpal.pg.newPayment(args);
    console.log('**** pg.new success ******');
    console.log(redirectUrl);
  } catch (e) {
    console.log('error in core');
    console.log(e);
  }
})();
