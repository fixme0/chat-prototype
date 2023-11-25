import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getUserName,
  setUserName,
} from '../../services/user';

import { Input } from '../ui/Input';
import { Button, BTN_TYPES } from '../ui/Button';

import { authorization } from './store/actions';

import styles from './styles';

const UserController = () => {
  const userName = useSelector(getUserName);

  const [errors, setErrors] = useState({
    name: '',
    message: '',
  });
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const validateMessage = useCallback(
    (nextMessage) => {
      const isEmptyValue = !nextMessage;
      const isMaxLength = nextMessage.length > 255;

      const errorsList = [
        isEmptyValue && 'Invalid Message',
        isMaxLength && 'Maximum length of 255 characters',
      ].filter(Boolean);
      const [error = ''] = errorsList;

      setErrors((prevErrors) => ({
        ...prevErrors,
        message: error,
      }));

      return errorsList;
    },
    [],
  );

  const validateName = useCallback((nextUserName) => {
    const errorsList = [
      !nextUserName && 'Invalid Name',
    ].filter(Boolean);
    const [error = ''] = errorsList;

    setErrors((prevErrors) => ({
      ...prevErrors,
      name: error,
    }));

    return errorsList;
  }, []);

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
