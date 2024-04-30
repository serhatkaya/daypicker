'use strict';

const vueLib = require('..');
const assert = require('assert').strict;

assert.strictEqual(vueLib(), 'Hello from vueLib');
console.info('vueLib tests passed');
