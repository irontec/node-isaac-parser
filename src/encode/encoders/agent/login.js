'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getLoginMessage(ext, pass) {

  if (isUndefined(ext)) {
    log('Missing parameter: ext on encoder.agent.getLoginMessage');
    throw new Error('Missing parameter: ext on encoder.agent.getLoginMessage');
  }

  if (isUndefined(pass)) {
    log('Missing parameter: pass on encoder.agent.getLoginMessage');
    throw new Error('Missing parameter: pass on encoder.agent.getLoginMessage');
  }

  return ['LOGIN', ext, pass].join(' ');
}
