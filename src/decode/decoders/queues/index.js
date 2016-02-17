
import queueInfo from './queueinfo';
import queueJoin from './join';
import queueLeave from './leave';

const queues = {
  // Queues
  QUEUEINFOOK: queueInfo,
  QUEUEJOINOK: queueJoin.OK,
  QUEUEJOINFAILED: queueJoin.FAILED,
  QUEUELEAVEOK: queueLeave.OK,
  QUEUELEAVEFAILED: queueLeave.FAILED
};

export default queues;
