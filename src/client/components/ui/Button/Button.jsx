import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

const BTN_TYPES = {
  BUTTON: 'button',
  SUBMIT: 'submit',
};

const Button = ({
  children,
  className,
  type = BTN_TYPES.BUTTON,
}) => (
  <button className={classnames(className, styles.button)} type={type}>
    {children}
  </button>
);

Button.propTypes = {
  children: T.node.isRequired,
  className: T.string,
  type: T.oneOf(Object.values(BTN_TYPES)),
};

export { Button, BTN_TYPES };
