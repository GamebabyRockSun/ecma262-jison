'use strict';

var BaseNode = require('./Base');

function BlockStatementNode(body) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  BaseNode.call(this, Object.assign.apply(Object, [{}, { type: 'BlockStatement' }].concat(args)));
  this.body = body;
}

exports.BlockStatementNode = BlockStatementNode;