
function queueInfo(data) {

  data.shift(); // REMOVE FIRST VALUE FROM ARRAY (EVENT NAME)

  return {
    event: 'queues.list',
    queues: data
  };
}

export default queueInfo;
