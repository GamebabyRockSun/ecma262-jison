module.exports = {
  conditions: [''],
  name: 'Statement',
  rules: [
    `EmptyStatement`,
    `ExpressionStatement`,
    `VariableStatement`,
    `BlockStatement`,
    `LabelledStatement`,
    `IfStatement`,
    `BreakableStatement`,
    `ContinueStatement`,
    `BreakStatement`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1;`,
    `$$ = $1;`,
    `console.log('block statement: ' + $1);$$ = $1;`,
    `console.log('labelled statement: ' + $1);$$ = $1;`,
    `console.log('if statement: ' + $1);$$ = $1;`,
    `console.log('break statement: ' + $1);$$ = $1;`,
    `console.log('continue statement: ' + $1);$$ = $1`,
    `console.log('break statement: ' + $1);$$ = $1`,
  ],
  subRules: [
    require('./EmptyStatement'),
    require('./ExpressionStatement'),
    require('./VariableStatement'),
    require('./BlockStatement'),
    require('./LabelledStatement'),
    require('./IfStatement'),
    require('./BreakableStatement'),
    require('./ContinueStatement'),
    require('./BreakStatement'),
  ],
};
