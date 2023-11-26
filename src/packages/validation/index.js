export const validateMessage = (nextMessage) => {
  const isEmptyValue = !nextMessage;
  const isMaxLength = nextMessage.length > 255;

  const errorsList = [
    isEmptyValue && 'Invalid Message',
    isMaxLength && 'Maximum length of 255 characters',
  ].filter(Boolean);

  return errorsList;
};

export const validateName = (nextUserName) => {
  const errorsList = [
    !nextUserName && 'Invalid Name',
  ].filter(Boolean);

  return errorsList;
};
