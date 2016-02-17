
function joinOK(data) {
  data.shift();
  return {
    event: 'queues.join',
    status: 'success',
    queue: data[3],
    message: data.join(' ')
  };
}

function joinFailed(data) {
  let queue;

  data.shift();

  queue = data[4];

  if (data[0] === 'Agent') {
    queue = data[7];
  }

  return {
    event: 'queues.join',
    status: 'error',
    queue: queue,
    message: data.join(' ')
  };
}

export default {
  OK: joinOK,
  FAILED: joinFailed
};
