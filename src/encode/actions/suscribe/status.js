'use strict';

export default function getStatusMessage(withUID, withQueue) {

  const options = ['STATUS'];

  if (withUID) {
    options.push('WUID');
  }

  if (withQueue) {
    options.push('WQUEUE');
  }

  return options.join(' ');
}
