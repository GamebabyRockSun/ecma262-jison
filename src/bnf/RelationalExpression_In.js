module.exports = {
  conditions: [''],
  name: 'RelationalExpression_In',
  rules: [
    'ShiftExpression',
    'RelationalExpression_In RelationalOperator ShiftExpression',
    'RelationalExpression_In in ShiftExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/RelationalExpression\').RelationalExpressionNode)($2, $1, $3, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/RelationalExpression\').RelationalExpressionNode)($2, $1, $3, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./ShiftExpression'),
  ],
};
