'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getAnswerMessage(refId, isExternal) {

  isExternal = isUndefined(isExternal) ? true : isExternal;

  if (isUndefined(refId)) {
    log('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: refId', 'Answer');
    return;
  }

  return [
      isExternal ? 'ANSWERUID' : 'ANSWER',
      refId
  ].join(' ');
}
