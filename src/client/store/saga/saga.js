import { spawn } from 'redux-saga/effects';

import { messagesRootSaga } from '../../services/messages';
import { userControllerRootSaga } from '../../components/UserController/store';
import { bootstrapRootSaga } from './bootstrapSaga';

function* rootSaga() {
  yield spawn(bootstrapRootSaga);
  yield spawn(messagesRootSaga);
  yield spawn(userControllerRootSaga);
}

export { rootSaga };
