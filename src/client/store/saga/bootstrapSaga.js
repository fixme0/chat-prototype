import { eventChannel } from 'redux-saga';
import {
  call, put, select, take, takeEvery,
} from 'redux-saga/effects';

import { getMessages, WS_EVENTS } from '../../../packages/api';

import { addMessage, getIsSendingMessage, setMessages } from '../../services/messages';

import { bootstrapApp, finishBootstrapMessages, startBootstrapMessages } from '../actions';

function* bootstrapAppSaga() {
  yield put(startBootstrapMessages());

  const messages = yield call(getMessages);

  yield put(setMessages(messages));
  yield put(finishBootstrapMessages());

  const socket = new WebSocket(`ws://${global.location.hostname}:3000`);

  const channel = yield eventChannel((emit) => {
    socket.onmessage = (event) => {
      emit(JSON.parse(event.data));
    };

    return () => {
      socket.close();
    };
  });

  while (true) {
    const { type, payload } = yield take(channel);

    if (type === WS_EVENTS.NEW_MESSAGE_CREATED) {
      const message = payload;
      const shouldAddMessage = !message.user.isOwner || (
        yield select((state) => !getIsSendingMessage(state, { id: message.id }))
      );

      if (shouldAddMessage) {
        yield put(addMessage(message));
      }
    }
  }
}

export function* bootstrapRootSaga() {
  yield takeEvery(bootstrapApp, bootstrapAppSaga);
}
