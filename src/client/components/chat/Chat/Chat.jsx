import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

const Body = ({ children }) => (
  <div className={styles.body}>
    {children}
  </div>
);

Body.propTypes = {
  children: T.node.isRequired,
};

const Wrapper = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

Wrapper.propTypes = {
  children: T.node.isRequired,
};

const Footer = ({ children, className, onSubmit }) => (
  <form
    action="#"
    className={classnames(styles.footer, className)}
    onSubmit={onSubmit}
  >
    {children}
  </form>
);

Footer.propTypes = {
  children: T.node.isRequired,
  className: T.string,
  onSubmit: T.func,
};

const Chat = {
  Body,
  Footer,
  Wrapper,
};

export { Chat };
