'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getQueuesJoinMessage(queueName, priority) {
  if (isUndefined(queueName)) {
    log('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: queueName', 'QueueJoin');
    return;
  }

  return [
        'QUEUEJOIN',
        queueName,
        priority ? priority : ''
    ].join(' ');
}
