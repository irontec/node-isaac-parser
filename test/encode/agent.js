
import test from 'tape';
import isaacWrapperParser from '../../src';

export default test('isaacWrapperParser:encode:agent', (t) => {

  t.equal(
    isaacWrapperParser.encode('agent.login', 223, 1234),
    'LOGIN 223 1234',
    'Valid Login'
  );


  t.throws(
    isaacWrapperParser.encode.bind(null, 'agent.login'),
    'Invalid Login: no agent'
  );

  t.throws(
    isaacWrapperParser.encode.bind(null, 'agent.login', 223),
    'Invalid Login: no password'
  );

  t.equal(
    isaacWrapperParser.encode('agent.logout'),
    'LOGOUT',
    'Logout'
  );



  t.end();

});