'use strict';

import debug from 'debug';
import uuid from 'node-uuid';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getMakeCallMessage(number, refId) {
  if (isUndefined(number)) {
    log('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: number', 'MakeCall');
    return;
  }

  refId = isUndefined(refId) ? uuid.v4() : refId;

  return ['CALL', refId, number].join(' ');
}
