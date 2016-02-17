
import get from 'lodash.get';
import isUndefined from 'lodash.isundefined';
import includes from 'lodash.includes';

import decoders from './decoders';

const ignoredEvents = ['DEVICESTATUSOK', 'STATUSOK'];

/**
 * @return {String}
 */
export default function decode(data) {

  const dataArr = data.replace(/(\r\n|\n|\r)/gm, '').split(' ');
  const decoderName = dataArr[0];

  if (includes(ignoredEvents, decoderName)) {
    return null;
  }

  const decoder = get(decoders, decoderName);

  if (isUndefined(decoder)) {
    throw new Error('Missing ' + decoderName + ' decoder');
  }

  if (!decoders.hasOwnProperty(decoderName)) {
    return null;
  }


  return decoders[decoderName](dataArr);
}
