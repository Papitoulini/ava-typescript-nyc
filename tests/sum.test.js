import test from 'ava';

import { asyncSum } from '../scripts/sum.js';

// test('sum', (t) => {
//   t.true(sum(1, 2, 3, 4) === 10);
// });

test('asyncSum', async (t) => {
  t.true(await asyncSum(1, 2, 3, 4) === 10);
});
