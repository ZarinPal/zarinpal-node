import { Zarinpal } from './core/Zarinpal';

const zarinpal = new Zarinpal({});
console.log(zarinpal);

// const args = {
//   merchant_id: '6c64a645-1b28-4956-b32e-7b777864121a',
//   amount: 10000,
//   description: 'test',
//   callback_url: 'google.com',
//   metadata: {
//     mobile: '09351204497',
//   },
// };

(async function () {
  console.log('**************');
  // const redirectUrl = await zarinpal.pg.newPayment(args);
  // console.log('**** pg.new success ******');
  // console.log(redirectUrl);
  const data = await zarinpal.pg.verify({
    amount: 10000,
    authority: 'A00000000000000000000000000482585518',
    merchant_id: '6c64a645-1b28-4956-b32e-7b777864121a',
  });
  console.log('show data');
  console.log(data);
})();
