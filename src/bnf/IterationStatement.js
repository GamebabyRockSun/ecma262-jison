module.exports = {
  name: 'IterationStatement',
  conditions: [''],
  rules: [
    `do Statement while ( Expression_In ) ;`,
    `while ( Expression_In ) Statement`,
    `for ( LexicalDeclaration Expression_In ; Expression_In ) Statement`,
    `for ( var VariableDeclarationList ; Expression_In ; Expression_In ) Statement`,
    `for ( LeftHandSideExpression in Expression_In ) Statement`,
    `for ( ForDeclaration in Expression_In ) Statement`,
    `for ( LeftHandSideExpression of AssignmentExpression_In ) Statement`,
    `for ( var ForBinding of AssignmentExpression_In ) Statement`,
    `for ( ForDeclaration of AssignmentExpression_In ) Statement`,
    `for ( Expression ; Expression_In ; Expression_In ) Statement`,
    `for ( Expression ; ; Expression_In ) Statement`,
    `for ( Expression ; ; ) Statement`,
    `for ( Expression ; Expression_In ; ) Statement`,
    `for ( ; Expression_In ; Expression_In ) Statement`,
    `for ( ; ; Expression_In ) Statement`,  
    `for ( ; ; ) Statement`,
    `for ( ; Expression_In ; ) Statement`,
  ],
  handlers: [
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7`,
    `$$ = $1 + $2 + $3 + $4 + $5`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8 + $9`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8 + $9`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7`,
  ],
  subRules: [
    require('./Expression_In'),
    require('./Statement'),
    require('./LexicalDeclaration'),
    require('./VariableDeclarationList'),
    require('./LeftHandSideExpression'),
    require('./ForDeclaration'),
    require('./AssignmentExpression_In'),
    require('./ForBinding'),
    require('./Expression'),
  ],
};