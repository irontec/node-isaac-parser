
function deviceStatus(data) {
  return {
    event: 'device.status',
    status: data[1],
    message: 'Device Status updated'
  };
}

export default deviceStatus;
