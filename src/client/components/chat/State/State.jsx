import React from 'react';

import { ReactComponent as LoginIcon } from './icons/login';
import styles from './styles';

const LoginState = () => (
  <div className={styles.root}>
    <LoginIcon />
    <span className={styles.text}>
      Enter your nickname to access the chat.
    </span>
  </div>
);

const State = {
  Login: LoginState,
};

export { State };
