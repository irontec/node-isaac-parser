'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getUnHoldMessage(refId, fromQueue) {

  fromQueue = isUndefined(fromQueue) ? true : fromQueue;

  if (isUndefined(refId)) {
    log('Missing parameter: refId on encoder.call.getUnHoldMessage');
    throw new Error('Missing parameter: refId on encoder.call.getUnHoldMessage');
    return;
  }

  return [
      fromQueue ? 'UNHOLDUID' : 'UNHOLD',
      refId
  ].join(' ');

}
