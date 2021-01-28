/* ns__file unit: static-grouping, comp: functions.test.ts */
/* ns__start_section imports */
import test from 'ava';
/* ns__custom_start customImports */
/* ns__custom_end customImports */

const functions = require('../../src/groupings/functions')
/* ns__end_section imports */

/* ns__custom_start tests */
test('functions', t => {
// update this as you update functions
  t.is(typeof functions.getValue, "function")
  t.is(typeof functions.setFlow, "function")
  t.is(typeof functions.menu, "function")
});
/* ns__custom_end tests */
