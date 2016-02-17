
import test from 'tape';
import isaacWrapperParser from '../../src';

export default test('isaacWrapperParser:encode:subscribe', (t) => {

  t.throws(
    isaacWrapperParser.encode.bind(null, 'subscribe'),
    'Invalid Subscribe: without subscriptionName'
  )

  // DEVICESTATUS

  t.equal(
    isaacWrapperParser.encode('subscribe', 'devicestatus'),
    'DEVICESTATUS',
    'Subscribe Device Status'
  );

  // STATUS

  t.equal(
    isaacWrapperParser.encode('subscribe', 'status'),
    'STATUS',
    'Subscribe Status: without UID and without Queue'
  );

  t.equal(
    isaacWrapperParser.encode('subscribe', 'status', true),
    'STATUS WUID',
    'Subscribe Status: with UID and without Queue'
  );

  t.equal(
    isaacWrapperParser.encode('subscribe', 'status', false, true),
    'STATUS WQUEUE',
    'Subscribe Status: without UID and with Queue'
  );

  t.equal(
    isaacWrapperParser.encode('subscribe', 'status', true, true),
    'STATUS WUID WQUEUE',
    'Subscribe Status: with UID and with Queue'
  );

  t.end();

});