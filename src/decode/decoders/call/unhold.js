
import startsWith from 'lodash.startswith';

function unhold(data, error) {
  let fromQueue = false;
  let evt = data[0];
  let status = 'success';

  if (error) {
    status = 'error';
  }

  if (startsWith(evt, 'UNHOLDUID')) {
    fromQueue = true;
  }

  data.shift();
  return {
    event: 'call.unhold',
    status: status,
    fromQueue: fromQueue,
    message: data.join(' ') // Channel not found
  };
}

function unholdOK(data) {
  return unhold(data);
}

function unholdFailed(data) {
  return unhold(data, true);
}

export default {
  OK: unholdOK,
  FAILED: unholdFailed
};
