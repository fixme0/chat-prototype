import { useCallback, useState } from 'react';

import { validateMessage, validateName } from '../../../packages/validation';

export const useValidation = () => {
  const [errors, setErrors] = useState({
    name: '',
    message: '',
  });

  const validateMessageProxy = useCallback(
    (nextMessage) => {
      const errorsList = validateMessage(nextMessage);
      const [error = ''] = errorsList;

      setErrors((prevErrors) => ({
        ...prevErrors,
        message: error,
      }));

      return errorsList;
    },
    [],
  );

  const validateNameProxy = useCallback((nextUserName) => {
    const errorsList = validateName(nextUserName);
    const [error = ''] = errorsList;

    setErrors((prevErrors) => ({
      ...prevErrors,
      name: error,
    }));

    return errorsList;
  }, []);

  return {
    errors,
    validateMessage: validateMessageProxy,
    validateName: validateNameProxy,
  };
};
