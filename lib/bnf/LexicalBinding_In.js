'use strict';

module.exports = {
  conditions: [''],
  name: 'LexicalBinding_In',
  rules: ['BindingIdentifier', 'BindingIdentifier Initializer_In', 'BindingPattern Initializer_In'],
  handlers: ['$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, null, { loc: this._$, yy })', '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, $2, { loc: this._$, yy })', '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, $2, { loc: this._$, yy })'],
  subRules: [require('./BindingIdentifier'), require('./BindingPattern'), require('./Initializer_In')]
};