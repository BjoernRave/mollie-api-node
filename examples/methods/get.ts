/**
 * @docs https://docs.mollie.com/reference/v2/methods-api/get-method
 */
import createMollieClient, { Method } from '@mollie/api-client';

const mollieClient = createMollieClient({ apiKey: 'test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM' });

(async () => {
  try {
    const method: Method = await mollieClient.methods.get('ideal');

    console.log(method);
  } catch (error) {
    console.warn(error);
  }
})();
