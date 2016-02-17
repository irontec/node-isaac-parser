
import test from 'tape';
import isaacWrapperParser from '../../src';

export default test('isaacWrapperParser:decode:call', (t) => {

  // STATUS

  t.deepEqual(
    isaacWrapperParser.decode('CALLSTATUS isaacIdPrueba ivozIdPrueba AGENT RINGING'),
    {
      event: 'call.status',
      isaacId: 'isaacIdPrueba',
      ivozId: 'ivozIdPrueba',
      source: 'AGENT',
      status: 'RINGING',
      fromQueue: false
    },
    'CALLSTATUS isaacIdPrueba ivozIdPrueba AGENT RINGING'
  );

  t.deepEqual(
    isaacWrapperParser.decode('EXTERNALCALLSTATUS idPrueba plataformaPrueba colaPrueba 220 RINGING'),
    {
      event: 'call.status',
      ivozId: 'idPrueba',
      platform: 'plataformaPrueba',
      queue: 'colaPrueba',
      number: '220',
      status: 'RINGING',
      fromQueue: true
    },
    'EXTERNALCALLSTATUS idPrueba plataformaPrueba colaPrueba 220 RINGING'
  );

  // HOLD
  
  t.deepEqual(
    isaacWrapperParser.decode('HOLDUIDOK Event sent'),
    {
      event: 'call.hold',
      status: 'success',
      fromQueue: true,
      message: 'Event sent'
    },
    'HOLDUIDOK Event sent'
  );
  
  t.deepEqual(
    isaacWrapperParser.decode('HOLDUIDFAILED Channel not found'),
    {
      event: 'call.hold',
      status: 'error',
      fromQueue: true,
      message: 'Channel not found'
    },
    'HOLDUIDFAILED Channel not found'
  );
  
  t.deepEqual(
    isaacWrapperParser.decode('UNHOLDUIDOK Event sent'),
    {
      event: 'call.unhold',
      status: 'success',
      fromQueue: true,
      message: 'Event sent'
    },
    'HOLDUIDOK Event sent'
  );
  
  t.deepEqual(
    isaacWrapperParser.decode('UNHOLDUIDFAILED Channel not found'),
    {
      event: 'call.unhold',
      status: 'error',
      fromQueue: true,
      message: 'Channel not found'
    },
    'UNHOLDUIDFAILED Channel not found'
  );

  t.end();

});