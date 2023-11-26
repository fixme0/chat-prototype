import React, { memo } from 'react';
import T from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

const Input = ({
  autoFocus = false,
  className,
  disabled = false,
  error,
  inputClassName,
  placeholder,
  value = '',
  onChange,
}) => (
  <div className={classnames(className, styles.root)}>
    { error && (
      <span className={styles.error}>
        {error}
      </span>
    ) }
    <input
      autoFocus={autoFocus}
      className={classnames(styles.input, inputClassName)}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={
          onChange
            ? (event) => {
              onChange(event.target.value, event);
            }
            : undefined
        }
    />
  </div>
);

Input.propTypes = {
  autoFocus: T.bool,
  className: T.string,
  disabled: T.bool,
  error: T.string,
  inputClassName: T.string,
  placeholder: T.string,
  value: T.string,
  onChange: T.func,
};

export default memo(Input);
