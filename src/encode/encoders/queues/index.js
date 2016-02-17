'use strict';

import get from './get';
import join from './join';
import leave from './leave';

var queues = {
  get,
  join,
  leave
};

export default queues;
