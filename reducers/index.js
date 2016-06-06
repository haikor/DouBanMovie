
'use strict';

var { combineReducers } = require('redux');

module.exports = combineReducers({
  navigate: require('./navigate'),
  online: require('./online'),
});
