'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getHangupMessage(refId, fromQueue) {

  fromQueue = isUndefined(fromQueue) ? true : fromQueue;

  if (isUndefined(refId)) {
    log('Missing parameter: refId on encoder.call.getHangupMessage');
    throw new Error('Missing parameter: refId on encoder.call.getHangupMessage');
    return;
  }

  return [
      fromQueue ? 'HANGUPUID' : 'HANGUP',
      refId
  ].join(' ');
}
