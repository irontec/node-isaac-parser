'use strict';

import agent from './agent';
import suscribe from './suscribe';
import device from './device';
import call from './call';
import queues from './queues';

var actions = {
  agent,
  suscribe,
  device,
  call,
  queues
};

export default actions;
