
const eventNames = {
  HOLD: {
    OK: [
      'HOLDOK',
      'HOLDUIDOK'
    ],
    FAILED: [
      'HOLDFAILED',
      'HOLDUIDFAILED'
    ]
  },
  UNHOLD: {
    OK: [
      'UNHOLDOK',
      'UNHOLDUIDOK'
    ],
    FAILED: [
      'UNHOLDFAILED',
      'UNHOLDUIDFAILED'
    ]
  },
  HANGUP: {
    OK: [
      'HANGUPOK',
      'HANGUPUIDOK'
    ],
    FAILED: [
      'HANGUPFAILED',
      'HANGUPUIDFAILED'
    ]
  },
  STATUS: [
    'CALLSTATUS',
    'EXTERNALCALLSTATUS'
  ]
}

export default eventNames;