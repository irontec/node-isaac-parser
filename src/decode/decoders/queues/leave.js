
function leaveOK(data) {
  data.shift();
  return {
    event: 'queues.leave',
    status: 'success',
    queue: data[3],
    message: data.join(' ')
  };
}

function leaveFailed(data) {
  let queue;

  data.shift();

  queue = data[4];

  if (data[0] === 'Agent') {
    queue = data[7];
  }

  return {
    event: 'queues.leave',
    status: 'error',
    queue: queue,
    message: data.join(' ')
  };
}

export default {
  OK: leaveOK,
  FAILED: leaveFailed
};
