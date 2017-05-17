'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getRedirectMessage(refId, extension) {

  if (isUndefined(refId)) {
    log('Missing parameter: refId on encoder.call.getRedirectMessage');
    throw new Error('Missing parameter: refId on encoder.call.getRedirectMessage');
  }

  if (isUndefined(extension)) {
    log('Missing parameter: extension on encoder.call.getRedirectMessage');
    throw new Error('Missing parameter: extension on encoder.call.getRedirectMessage');
  }

  return ['REDIRECTUID', refId, 'custom-tasgo-redirect', extension].join(' ');
}
