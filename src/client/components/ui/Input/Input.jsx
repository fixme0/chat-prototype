import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

const Input = ({
  className,
  error,
  inputClassName,
  placeholder,
}) => (
  <div className={classnames(className, styles.root)}>
    { error && (
    <span className={styles.error}>
      {error}
    </span>
    ) }
    <input
      className={classnames(styles.input, inputClassName)}
      placeholder={placeholder}
    />
  </div>
);

Input.propTypes = {
  className: T.string,
  error: T.string,
  inputClassName: T.string,
  placeholder: T.string,
};

export { Input };
