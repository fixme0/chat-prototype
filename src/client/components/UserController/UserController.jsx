import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getUserName,
  setUserName,
} from '../../services/user';

import { Input } from '../ui/Input';
import { Button, BTN_TYPES } from '../ui/Button';

import { authorization } from './store/actions';

import { useValidation } from './useValidation';
import styles from './styles';

const UserController = () => {
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

  const onSubmit = useCallback((event) => {
    event.preventDefault();

    const errorsList = [
      ...validateName(userName),
      ...validateMessage(message),
    ];

    if (!errorsList.length) {
      dispatch(authorization(userName, message));
    }
  }, [dispatch, message, userName, validateMessage, validateName]);

  return (
    <form action="#" className={styles.form} onSubmit={onSubmit}>
      <Input
        className={styles.userNameControl}
        error={errors.name}
        inputClassName={styles.userNameInput}
        placeholder="Nickname"
        value={userName}
        onChange={onUserNameChange}
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
