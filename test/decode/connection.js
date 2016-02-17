
import test from 'tape';
import isaacWrapperParser from '../../src';

export default test('isaacWrapperParser:decode:connection', (t) => {

  t.deepEqual(
    isaacWrapperParser.decode('Isaac - Ivozng Simplified Asterisk AMI Connector/0.1'),
    {
      event: 'isaac.connect',
      status: 'success'
    },
    'Isaac - Ivozng Simplified Asterisk AMI Connector/0.1'
  );

  t.deepEqual(
    isaacWrapperParser.decode('ERROR An error message'),
    {
      event: 'isaac.error',
      ERROR: 'UNKNOWN',
      message: 'An error message'
    },
    'ERROR An error message'
  );

  t.end();

});