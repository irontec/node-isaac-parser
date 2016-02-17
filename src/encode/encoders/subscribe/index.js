
import debug from 'debug';

import status from './status';
import devicestatus from './devicestatus';

const log = debug('isaac-wrapper.parser:err');

const subscriptions = {
  status,
  devicestatus
};

export default function Subscribe() {

  const subscription = [].shift.apply(arguments);

  if (!(subscription in subscriptions)) {
    log('Method not found: ' + subscription +' on encoder.Subscribe');
    throw new Error('Method not found: ' + subscription +' on encoder.Subscribe');
  }

  return subscriptions[subscription].apply(this, arguments);
}
