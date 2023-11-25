import { call, put, takeEvery } from 'redux-saga/effects';

import { sendMessage } from '../../../packages/api';

import { addMessage, sendMessage as sendMessageAction } from './actions';

function* sendMessageSaga({ payload: messageAsString }) {
  try {
    const message = yield call(sendMessage, messageAsString);

    yield put(addMessage(message));
  } catch (error) {
    console.log(error.message);
  }
}

export function* messagesRootSaga() {
  yield takeEvery(sendMessageAction, sendMessageSaga);
}
