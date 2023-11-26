import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendMessage } from '../../services/messages';
import {
  getIsAuthenticated,
  getUserName,
  setUserName,
} from '../../services/user';

import { Input } from '../ui/Input';
import { Button, BTN_TYPES } from '../ui/Button';

import { authorization } from './store/actions';

import { useValidation } from './useValidation';
import styles from './styles';

const UserController = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const userName = useSelector(getUserName);

  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const {
    errors,
    validateMessage,
    validateName,
  } = useValidation();

  const onUserNameChange = useCallback(
    (nextName) => {
      validateName(nextName);
      dispatch(setUserName(nextName));
    },
    [dispatch, validateName],
  );

  const onMessageChange = useCallback(
    (nextMessage) => {
      validateMessage(nextMessage);
      setMessage(nextMessage);
    },
    [validateMessage],
  );

  const onSubmitWithoutAuth = () => {
    const errorsList = [
      ...validateName(userName),
      ...validateMessage(message),
    ];

    if (!errorsList.length) {
      dispatch(authorization(userName, message));
      setMessage('');
    }
  };
  const onSubmitWithAuth = () => {
    const errorsList = validateMessage(message);

    if (!errorsList.length) {
      dispatch(sendMessage(message));
      setMessage('');
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (isAuthenticated) {
      onSubmitWithAuth();
    } else {
      onSubmitWithoutAuth();
    }
  };

  return (
    <form action="#" className={styles.form} onSubmit={onSubmit}>
      <Input
        autoFocus
        className={styles.userNameControl}
        disabled={isAuthenticated}
        error={errors.name}
        inputClassName={styles.userNameInput}
        placeholder="Nickname"
        value={userName}
        onChange={
          isAuthenticated
            ? undefined
            : onUserNameChange
        }
      />
      <Input
        className={styles.messageControl}
        error={errors.message}
        placeholder="Message"
        value={message}
        onChange={onMessageChange}
      />
      <Button className={styles.submitButton} type={BTN_TYPES.SUBMIT}>
        Send
      </Button>
    </form>
  );
};

export { UserController };
