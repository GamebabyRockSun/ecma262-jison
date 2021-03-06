module.exports = {
  conditions: [''],
  name: 'BindingElisionElement',
  rules: [
    'BindingElement',
    'Elision BindingElement',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1.concat($2)',
  ],
  subRules: [
    require('./BindingElement'),
    require('./Elision'),
  ],
};
