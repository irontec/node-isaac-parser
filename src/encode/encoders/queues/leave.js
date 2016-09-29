'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getQueuesLeaveMessage(queueName) {
  if (isUndefined(queueName)) {
    log('Missing parameter: queueName on encoder.queues.getQueuesLeavesMessage');
    throw new Error('Missing parameter: queueName on encoder.queues.getQueuesLeavesMessage');
  }

  if (typeof queueName === 'object') {
    queueName = queueName.queue;
  }

  return ['QUEUELEAVE', queueName].join(' ');
}
