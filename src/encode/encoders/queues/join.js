'use strict';

import debug from 'debug';
import isUndefined from 'lodash.isundefined';

const log = debug('isaac-wrapper.parser:err');

export default function getQueuesJoinMessage(queueName, priority) {
  let strArr;

  if (isUndefined(queueName)) {
    log('Missing parameter: queueName on encoder.queues.getQueuesJoinMessage');
    throw new Error('Missing parameter: queueName on encoder.queues.getQueuesJoinMessage');
  }

  strArr = ['QUEUEJOIN', queueName];

  if (priority) {
    strArr.push(priority);
  }

  return strArr.join(' ');
}
