'use strict'

import type { Action } from './types';

function swtichTab(tabName):Action{
	return {
		'type':'SWITCH_TAB',
		'tabName':tabName
	}
}

module.exports = {swtichTab};
