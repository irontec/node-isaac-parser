
import assign from 'lodash.assign';


import connection from './connection';
import agent from './agent';
import device from './device';
import queues from './queues';
import call from './call';

const serializers = assign(
  {},
  connection,
  agent,
  device,
  queues,
  call
);

module.exports = serializers;
