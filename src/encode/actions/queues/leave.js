'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getQueuesLeaveMessage(queueName) {
  if (isUndefined(queueName)) {
    log('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: queueName', 'QueueLeave');
    return;
  }

  return ['QUEUELEAVE', queueName].join(' ');
}
