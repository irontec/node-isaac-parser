
import forEach from 'lodash.foreach';
import isArray from 'lodash.isarray';

import status from './status';
import hangup from './hangup';
import hold from './hold';
import unhold from './unhold';

import eventNames from './event-names';

let call = {};

forEach(eventNames.STATUS, loadDecoders.bind(null, status));
forEach(eventNames.HOLD, loadDecoders.bind(null, hold));
forEach(eventNames.UNHOLD, loadDecoders.bind(null, unhold));
forEach(eventNames.HANGUP, loadDecoders.bind(null, hangup));

function loadDecoders(type, status, key) {
  let statusArr = isArray(status) ? status : null;

  if (!statusArr) {
    call[status] = type;
    return;
  }

  forEach(statusArr, function(statusStr) {
    call[statusStr] = type[key];
  });
}

export default call;
