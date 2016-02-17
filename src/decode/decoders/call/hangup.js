
import startsWith from 'lodash.startswith';

function hangup(data, error) {
  let fromQueue = false;
  let evt = data[0];
  let status = 'success';

  if (error) {
    status = 'error';
  }

  if (startsWith(evt, 'HANGUPUID')) {
    fromQueue = true;
  }

  data.shift();
  return {
    event: 'call.hangup',
    status: status,
    fromQueue: fromQueue,
    message: data.join(' ') // Channel not found
  };
}

function hangupOK(data) {
  return hangup(data);
}

function hangupFailed(data) {
  return hangup(data, true);
}

export default {
  OK: hangupOK,
  FAILED: hangupFailed
};
