
import get from 'lodash.get';
import isUndefined from 'lodash.isundefined';

import encoders from './encoders';

/**
 * @return {String}
 */
export default function encode() {

  const encoderName = [].shift.apply(arguments);
  const encoder = get(encoders, encoderName);

  if (isUndefined(encoder)) {
    throw new Error('Missing ' + encoderName + ' encoder');
  }

  return encoder.apply(null, arguments);
}
