'use strict';

import get from 'lodash.get';
import isUndefined from 'lodash.isundefined';

import actions from './actions';

/**
 * @return {String}
 */
export default function encode() {

  const action = [].shift.apply(arguments);
  const encoder = get(actions, action);

  if (isUndefined(encoder)) {
    throw new Error('Missing ' + action + ' encoder');
  }

  return encoder.apply(null, arguments);
}
