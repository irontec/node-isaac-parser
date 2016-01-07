'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getHangupMessage(refId, fromQueue) {

  fromQueue = isUndefined(fromQueue) ? true : fromQueue;

  if (isUndefined(refId)) {
    log('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: refId', 'Hangup');
    return;
  }

  return [
      fromQueue ? 'HANGUPUID' : 'HANGUP',
      refId
  ].join(' ');
}
