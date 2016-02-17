
import test from 'tape';
import isaacWrapperParser from '../../src';

export default test('isaacWrapperParser:decode:device', (t) => {

  t.deepEqual(
    isaacWrapperParser.decode('DEVICESTATE UNPAUSED'),
    {
      event: 'device.status',
      status: 'UNPAUSED',
      message: 'Device Status updated'
    },
    'DEVICESTATE UNPAUSED'
  );

  t.end();

});