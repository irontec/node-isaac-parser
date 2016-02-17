
import assign from 'lodash.assign';

const externalCallEvent = 'EXTERNALCALLSTATUS';

const refIdKey = 0;

const externalKeys = {
  ivozId: 1,
  source: 2,
  status: 3
};

const defaultKeys = {
  queue: 2,
  platform: 1,
  number: 3,
  status: 4
};

function getProps(isExternal, data) {
  if (!isExternal) {
    return {
      fromQueue: false,
      isaacId: data[refIdKey],
      ivozId: data[externalKeys.ivozId],
      source: data[externalKeys.source],
      status: data[externalKeys.status]
    };
  }

  return {
    ivozId: data[refIdKey],
    queue: data[defaultKeys.queue],
    platform: data[defaultKeys.platform],
    number: data[defaultKeys.number],
    status: data[defaultKeys.status]
  };
}

function status(data) {
  let evt = data.shift();
  let serializedData = {
    event: 'call.status',
    fromQueue: true
  };
  let isExternal = (evt === externalCallEvent);

  assign(
    serializedData,
    getProps(isExternal, data)
  );

  return serializedData;
}

export default status;
