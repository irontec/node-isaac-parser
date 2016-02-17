
import test from 'tape';
import isaacWrapperParser from '../../src';

export default test('isaacWrapperParser:decode:queues', (t) => {

  t.deepEqual(
    isaacWrapperParser.decode('QUEUEINFOOK prueba1 prueba2'),
    {
      event: 'queues.list',
      queues: ['prueba1', 'prueba2']
    },
    'QUEUEINFOOK prueba1 prueba2'
  );

  t.deepEqual(
    isaacWrapperParser.decode('QUEUEJOINOK Joined to queue prueba'),
    {
      event: 'queues.join',
      status: 'success',
      queue: 'prueba',
      message: 'Joined to queue prueba'
    },
    'QUEUEJOINOK Joined to queue prueba'
  );

  t.deepEqual(
    isaacWrapperParser.decode('QUEUEJOINFAILED Failed joining to queue prueba'),
    {
      event: 'queues.join',
      status: 'error',
      queue: 'prueba',
      message: 'Failed joining to queue prueba'
    },
    'QUEUEJOINFAILED Failed joining to queue prueba'
  );

  t.deepEqual(
    isaacWrapperParser.decode('QUEUELEAVEOK Left to queue prueba'),
    {
      event: 'queues.leave',
      status: 'success',
      queue: 'prueba',
      message: 'Left to queue prueba'
    },
    'QUEUELEAVEOK Left to queue prueba'
  );

  t.deepEqual(
    isaacWrapperParser.decode('QUEUELEAVEFAILED Failed leaving to queue prueba'),
    {
      event: 'queues.leave',
      status: 'error',
      queue: 'prueba',
      message: 'Failed leaving to queue prueba'
    },
    'QUEUELEAVEFAILED Failed leaving to queue prueba'
  );

  t.end();

});