module.exports = {
  conditions: [''],
  name: 'Expression_In',
  rules: [
    'AssignmentExpression_In',
    'Expression_In , AssignmentExpression_In',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = new (require(\'./ast/SequenceExpressionNode\'))([$1].concat([$3]), { loc: this._$, yy })',
  ],
  subRules: [
    require('./AssignmentExpression_In'),
  ],
};
