
function loginOK() {
  return {
    event: 'agent.login',
    status: 'success',
    message: 'Access Granted'
  };
}

function loginFailed(data) {
  let errorCode = 'INVALIDTERM';
  let errorMessage = 'Terminal not registered';

  if (data.length === 1) {
    errorCode = 'NOTERM';
    errorMessage = 'Agent not logged in terminal';
  }

  return {
    event: 'agent.login',
    status: 'error',
    error: errorCode,
    message: errorMessage
  };
}

export default {
  OK: loginOK,
  FAILED: loginFailed
};
