import React, { memo } from 'react';
import T from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

const Input = ({
  className,
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
      className={classnames(styles.input, inputClassName)}
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
  className: T.string,
  error: T.string,
  inputClassName: T.string,
  placeholder: T.string,
  value: T.string,
  onChange: T.func,
};

export default memo(Input);
