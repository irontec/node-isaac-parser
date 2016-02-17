
import test from 'tape';
import isaacWrapperParser from '../../src';

export default test('isaacWrapperParser:decode:agent', (t) => {

  t.deepEqual(
    isaacWrapperParser.decode('LOGINOK'),
    {
      event: 'agent.login',
      status: 'success',
      message: 'Access Granted'
    },
    'LOGINOK'
  );

  t.deepEqual(
    isaacWrapperParser.decode('LOGINFAIL'),
    {
      event: 'agent.login',
      status: 'error',
      error: 'NOTERM',
      message: 'Agent not logged in terminal'
    },
    'LOGINFAIL'
  );

  t.deepEqual(
    isaacWrapperParser.decode('LOGINFAIL INVALIDTERM'),
    {
      event: 'agent.login',
      status: 'error',
      error: 'INVALIDTERM',
      message: 'Terminal not registered'
    },
    'LOGINFAIL INVALIDTERM'
  );

  t.deepEqual(
    isaacWrapperParser.decode('BYE'),
    {
      event: 'agent.logout',
      status: 'success',
      message: 'Agent logged out'
    },
    'BYE'
  );

  t.end();

});