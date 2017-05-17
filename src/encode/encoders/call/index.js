'use strict';

import create from './create';
import answer from './answer';
import hangup from './hangup';
import hold from './hold';
import unhold from './unhold';
import redirect from './redirect';

var call = {
  create,
  answer,
  hangup,
  hold,
  unhold,
  redirect
};

export default call;
