
function error(data) {
  data.shift();
  return {
    event: 'isaac.error',
    ERROR: 'UNKNOWN',
    message: data.join(' ')
  };
}

export default error;
