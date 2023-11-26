import { call, put, takeEvery } from 'redux-saga/effects';

import { login, setAuthToken } from '../../../../packages/api';

import { sendMessage } from '../../../services/messages';
import { setAuthorized, setUser } from '../../../services/user';

import { authorization } from './actions';

function* authorizationSaga({ payload }) {
  const { message, userName } = payload;

  try {
    const { authToken, user } = yield call(login, userName);

    setAuthToken(authToken);
    yield put(setUser(user));
    yield put(setAuthorized(true));
    yield put(sendMessage(message));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

function* userControllerRootSaga() {
  yield takeEvery(authorization, authorizationSaga);
}

export { userControllerRootSaga };
