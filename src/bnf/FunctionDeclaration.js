module.exports = {
  conditions: [''],
  name: 'FunctionDeclaration',
  rules: [
    'FUNCTION BindingIdentifier ( ) { FunctionBody }',
    'FUNCTION BindingIdentifier ( ) LeftBrace RightBrace',
    'FUNCTION BindingIdentifier ( FormalParameters ) { FunctionBody }',
    'FUNCTION BindingIdentifier ( FormalParameters ) LeftBrace RightBrace',
  ],
  handlers: [
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, [], $6, { loc: this._$, yy })',
    `$$ = new (require('./ast/FunctionDeclaration').FunctionDeclarationNode)(
          $2,
          [],
          new (require('./ast/BlockStatement').BlockStatementNode)(
            [],
            // block location
            { loc: (require('./util').mergeLoc($5, $6)), yy }
          ),
          { loc: this._$, yy }
        )`,
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, $4, $7, { loc: this._$, yy })',
    `$$ = new (require('./ast/FunctionDeclaration').FunctionDeclarationNode)(
        $2,
        $4,
        // block location
        new (require('./ast/BlockStatement').BlockStatementNode)(
          [],
          { loc: (require('./util').mergeLoc($6, $7)), yy }
        ),
        { loc: this._$, yy })`,
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./FunctionBody'),
    require('./FormalParameters'),
    require('./LeftBrace'),
    require('./RightBrace'),
  ],
};
