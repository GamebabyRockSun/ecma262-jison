'use strict';

module.exports = {
  conditions: [''],
  name: 'ClassElementList',
  rules: ['ClassElement', 'ClassElementList ClassElement'],
  handlers: ['$$ = [$1]', '$$ = $1.concat([$2])'],
  subRules: [require('./ClassElement')]
};