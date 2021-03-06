module.exports = {
  name: 'IfStatement_Return',
  conditions: [''],
  rules: [
    'if ( Expression_In ) Statement_Return',
    'if ( Expression_In ) Statement_Return else Statement_Return',
  ],
  handlers: [
    '$$ = new (require(\'./ast/IfStatement\').IfStatementNode)($3, $5, null, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/IfStatement\').IfStatementNode)($3, $5, $7, { loc: this._$, yy })',
  ],
  subRules: [
    require('./Statement_Return'),
    require('./Expression_In'),
  ],
};
