import { useCallback, useState } from 'react';

export const useValidation = () => {
  const [errors, setErrors] = useState({
    name: '',
    message: '',
  });

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

  return {
    errors,
    validateMessage,
    validateName,
  };
};
