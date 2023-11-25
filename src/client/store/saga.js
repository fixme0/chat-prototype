import { spawn } from 'redux-saga/effects';

import { messagesRootSaga } from '../services/messages';
import { userControllerRootSaga } from '../components/UserController/store';

function* rootSaga() {
  yield spawn(userControllerRootSaga);
  yield spawn(messagesRootSaga);
}

export { rootSaga };
