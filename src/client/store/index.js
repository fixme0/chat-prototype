import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { messagesReducer as messages } from '../services/messages';
import { userReducer as user } from '../services/user';

import { appReducer as app } from './reducer';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    app,
    messages,
    user,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export { store };
export { bootstrapApp } from './actions';
