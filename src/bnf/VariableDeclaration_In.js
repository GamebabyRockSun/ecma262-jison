module.exports = {
  conditions: [''],
  name: 'VariableDeclaration_In',
  rules: [
    'BindingIdentifier',
    'BindingIdentifier Initializer_In',
    'BindingPattern Initializer_In',
  ],
  handlers: [
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, $2, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/VariableDeclaratorNode\'))($1, $2, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./Initializer_In'),
    require('./BindingPattern'),
  ],
};
