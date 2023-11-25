import React from 'react';
import T from 'prop-types';

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

const Footer = ({ children }) => (
  <div
    className={styles.footer}
  >
    {children}
  </div>
);

Footer.propTypes = {
  children: T.node.isRequired,
};

const Chat = {
  Body,
  Footer,
  Wrapper,
};

export { Chat };
