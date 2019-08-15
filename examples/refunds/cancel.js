/**
 * @docs https://docs.mollie.com/reference/v2/refunds-api/cancel-refund
 */
const { createMollieClient } = require('@mollie/api-client');

const mollieClient = createMollieClient({ apiKey: 'test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM' });

(async () => {
  try {
    const result = await mollieClient.payments_refunds.cancel('re_4qqhO89gsT', { paymentId: 'tr_WDqYK6vllg' });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();
