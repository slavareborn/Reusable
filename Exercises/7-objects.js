'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const obj1 = { name: 'Slava' };
  let obj2 = { name: 'Slava' };

  obj1.name = 'Reborn';
  obj2.name = 'Reborn';

  obj2 = { name: 'Slava Reborn'}
}
// Result of both objects in this code will be the same.

module.exports = { fn };
