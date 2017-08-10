/*!
 * eslint-config-standard-tunnckocore <https://github.com/tunnckoCore/eslint-config-standard-tunnckocore>
 *
 * Copyright (c) 2017 Charlike Mike Reagent <open.source.charlike@gmail.com> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

const test = require('mukla') // eslint-disable-line
const config = require('./index')

test('foo bar', () => {
  test.strictEqual(typeof config, 'object')
  test.strictEqual(typeof config.rules, 'object')
})
