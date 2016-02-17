'use strict';

import create from './create';
import answer from './answer';
import hangup from './hangup';
import hold from './hold';
import unhold from './unhold';

var call = {
  create,
  answer,
  hangup,
  hold,
  unhold
};

export default call;
