
import test from 'tape';
import isaacWrapperParser from '../../src';

export default test('isaacWrapperParser:encode:queues', (t) => {

  // INFO

  t.equal(
    isaacWrapperParser.encode('queues.get'),
    'QUEUEINFO',
    'Queues Info'
  );

  // JOIN

  t.equal(
    isaacWrapperParser.encode('queues.join', 'prueba', 1),
    'QUEUEJOIN prueba 1',
    'Valid Queues Join: with priority'
  );

  t.equal(
    isaacWrapperParser.encode('queues.join', 'prueba'),
    'QUEUEJOIN prueba',
    'Valid Queues Join: without priority'
  );

  t.throws(
    isaacWrapperParser.encode.bind(null, 'queues.join'),
    'Invalid Queues Join: without queueName'
  )

  // LEAVE

  t.equal(
    isaacWrapperParser.encode('queues.leave', 'prueba'),
    'QUEUELEAVE prueba',
    'Valid Queues Leave'
  );

  t.throws(
    isaacWrapperParser.encode.bind(null, 'queues.leave'),
    'Invalid Queues Leave: without queueName'
  )

  t.end();

});