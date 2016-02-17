'use strict';

import debug from 'debug';
import uuid from 'node-uuid';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getCreateMessage(number, refId, ddi) {

  let strArr = ['CALL'];

  if (isUndefined(number)) {
    log('Missing parameter: number on encoder.call.getCreateMessage');
    throw new Error('Missing parameter: number on encoder.call.getCreateMessage');
  }

  refId = isUndefined(refId) ? uuid.v4() : refId;

  strArr.push(refId);
  strArr.push(number);
  strArr.push('WUID');

  if (ddi) {
    strArr.push(ddi);
  }

  return strArr.join(' ');
}
