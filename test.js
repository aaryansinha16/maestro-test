const { test } = require('node:test')
const { add } = require('./index.js')
test('1+2 is 3', (t) => { if (add(1, 2) !== 3) throw new Error('add is broken') })
