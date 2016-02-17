'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getHoldMessage(refId, fromQueue) {

  fromQueue = isUndefined(fromQueue) ? true : fromQueue;

  if (isUndefined(refId)) {
    log('Missing parameter: refId on encoder.call.getHoldMessage');
    throw new Error('Missing parameter: refId on encoder.call.getHoldMessage');
    return;
  }

  return [
      fromQueue ? 'HOLDUID' : 'HOLD',
      refId
  ].join(' ');
}
