'use strict';

import debug from 'debug';

import status from './status';
import devicestatus from './devicestatus';

const log = debug('isaac-wrapper.parser:err');

const suscriptions = {
  status,
  devicestatus
};

export default function Suscribe() {

  const suscription = [].shift.apply(arguments);

  if (!(suscription in suscriptions)) {
    log('[id:"%s" message:"%s" at:"%s"]', this.id, 'Method' + suscription + 'not found', 'Suscribe');
    return;
  }

  return suscriptions[suscription].apply(this, arguments);
}
