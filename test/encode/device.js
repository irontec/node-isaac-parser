
import test from 'tape';
import isaacWrapperParser from '../../src';

export default test('isaacWrapperParser:encode:device', (t) => {

  t.equal(
    isaacWrapperParser.encode('device.pause'),
    'ACDPAUSE',
    'Device Pause'
  );

  t.equal(
    isaacWrapperParser.encode('device.unpause'),
    'ACDUNPAUSE',
    'Device Unpause'
  );

  t.end();

});