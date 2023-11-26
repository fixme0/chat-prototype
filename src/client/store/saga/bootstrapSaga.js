import { call, put, takeEvery } from 'redux-saga/effects';

import { getMessages } from '../../../packages/api';

import { setMessages } from '../../services/messages';

import { bootstrapApp, finishBootstrapMessages, startBootstrapMessages } from '../actions';

function* bootstrapAppSaga() {
  yield put(startBootstrapMessages());

  const messages = yield call(getMessages);

  yield put(setMessages(messages));
  yield put(finishBootstrapMessages());
}

export function* bootstrapRootSaga() {
  yield takeEvery(bootstrapApp, bootstrapAppSaga);
}
