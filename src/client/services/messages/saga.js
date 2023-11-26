import { call, put, takeEvery } from 'redux-saga/effects';

import { sendMessage } from '../../../packages/api';

import { addMessage, completeSendingMessage, sendMessage as sendMessageAction } from './actions';

function* sendMessageSaga({ payload: messageAsString }) {
  try {
    const message = yield call(sendMessage, messageAsString);

    yield put(addMessage(message));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  } finally {
    yield put(completeSendingMessage());
  }
}

export function* messagesRootSaga() {
  yield takeEvery(sendMessageAction, sendMessageSaga);
}
