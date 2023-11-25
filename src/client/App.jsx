import React from 'react';

import { Chat } from './components/chat/Chat';
import { State } from './components/chat/State';
import { Input } from './components/ui/Input';
import { Button, BTN_TYPES } from './components/ui/Button';

import styles from './styles';

const App = () => (
  <Chat.Wrapper>
    <Chat.Body>
      <State.Login />
    </Chat.Body>
    <Chat.Footer className={styles.footerForm}>
      <Input
        className={styles.userNameControl}
        inputClassName={styles.userNameInput}
        placeholder="Nickname"
      />
      <Input
        className={styles.messageControl}
        placeholder="Message"
      />
      <Button className={styles.submitButton} type={BTN_TYPES.SUBMIT}>
        Send
      </Button>
    </Chat.Footer>
  </Chat.Wrapper>
);

export { App };
