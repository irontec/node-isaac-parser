'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getAnswerMessage(refId, isExternal) {

  isExternal = isUndefined(isExternal) ? true : isExternal;

  if (isUndefined(refId)) {
    log('Missing parameter: refId on encoder.call.getAnswerMessage');
    throw new Error('Missing parameter: refId on encoder.call.getAnswerMessage');
    return;
  }

  return [
    isExternal ? 'ANSWERUID' : 'ANSWER',
    refId
  ].join(' ');
}
