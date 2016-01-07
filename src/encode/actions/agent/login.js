'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getLoginMessage(ext, pass) {

  if (isUndefined(ext)) {
    log('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: ext', 'Login');
    return;
  }

  if (isUndefined(pass)) {
    log('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: pass', 'Login');
    return;
  }

  return ['LOGIN', ext, pass].join(' ');
}
