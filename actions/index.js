
'use strict';

const navigateActions = require('./navigate');
const onlineActions = require('./online');

module.exports = {
  ...navigateActions,
  ...onlineActions,
};