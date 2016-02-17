
import test from 'tape';
import isaacWrapperParser from '../../src';
import getStrWords from '../helpers/get-str-words';

export default test('isaacWrapperParser:encode:call', (t) => {

  // CREATE

  t.deepEqual(
    getStrWords(
      isaacWrapperParser.encode('call.create', 223),
      [0, 2, 4]
    ),
    ['CALL', '223', null],
    'Valid Create Call: without refId and without DDI'
  );

  t.deepEqual(
    getStrWords(
      isaacWrapperParser.encode('call.create', 223, 'prueba'),
      [0, 1, 2, 4]
    ),
    ['CALL', 'prueba', '223', null],
    'Valid Create Call: with refId and without DDI'
  );

  t.deepEqual(
    getStrWords(
      isaacWrapperParser.encode('call.create', 223, null, 123),
      [0, 1, 2, 4]
    ),
    ['CALL', null, '223', '123'],
    'Valid Create Call: without refId and with DDI'
  );

  t.deepEqual(
    getStrWords(
      isaacWrapperParser.encode('call.create', 223, 123, 123),
      [0, 1, 2, 4]
    ),
    ['CALL', '123', '223', '123'],
    'Valid Create Call: with refId and with DDI'
  );

  t.throws(
    isaacWrapperParser.encode.bind(null, 'call.create'),
    'Invalid Create Call: without number'
  );

  // ANSWER

  t.equal(
    isaacWrapperParser.encode('call.answer', 'prueba', true),
    'ANSWERUID prueba',
    'Valid Answer Call: is external'
  );

  t.equal(
    isaacWrapperParser.encode('call.answer', 'prueba', false),
    'ANSWER prueba',
    'Valid Answer Call: not external'
  );

  t.throws(
    isaacWrapperParser.encode.bind(null, 'call.answer'),
    'Invalid Answer Call: without refId'
  );

  // HANGUP

  t.equal(
    isaacWrapperParser.encode('call.hangup', 'prueba', true),
    'HANGUPUID prueba',
    'Valid HangUp Call: is external'
  );

  t.equal(
    isaacWrapperParser.encode('call.hangup', 'prueba', false),
    'HANGUP prueba',
    'Valid HangUp Call: not external'
  );

  t.throws(
    isaacWrapperParser.encode.bind(null, 'call.hangup'),
    'Invalid HangUp Call: without refId'
  );

  // HOLD

  t.equal(
    isaacWrapperParser.encode('call.hold', 'prueba', true),
    'HOLDUID prueba',
    'Valid Hold Call: is external'
  );

  t.equal(
    isaacWrapperParser.encode('call.hold', 'prueba', false),
    'HOLD prueba',
    'Valid Hold Call: not external'
  );

  t.throws(
    isaacWrapperParser.encode.bind(null, 'call.hold'),
    'Invalid Hold Call: without refId'
  );

  // UNHOLD

  t.equal(
    isaacWrapperParser.encode('call.unhold', 'prueba', true),
    'UNHOLDUID prueba',
    'Valid UnHold Call: is external'
  );

  t.equal(
    isaacWrapperParser.encode('call.unhold', 'prueba', false),
    'UNHOLD prueba',
    'Valid UnHold Call: not external'
  );

  t.throws(
    isaacWrapperParser.encode.bind(null, 'call.unhold'),
    'Invalid UnHold Call: without refId'
  );

  t.end();

});