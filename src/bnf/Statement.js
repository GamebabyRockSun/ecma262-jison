module.exports = {
  conditions: [''],
  name: 'Statement',
  rules: [
    'EmptyStatement',
    'ExpressionStatement',
    'VariableStatement',
    'BlockStatement',
    /*'LabelledStatement',
    'IfStatement',
    'BreakableStatement',
    'ContinueStatement',
    'BreakStatement',
    'WithStatement',
    'ThrowStatement',
    'DebuggerStatement',
    'TryStatement',*/
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
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
    require('./WithStatement'),
    require('./ThrowStatement'),
    require('./DebuggerStatement'),
    require('./TryStatement'),
  ],
};
