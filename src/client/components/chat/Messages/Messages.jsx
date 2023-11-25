import React from 'react';
import T from 'prop-types';

import styles from './styles';

const Messages = ({ children }) => (
  <ul className={styles.list}>
    {children}
  </ul>
);

Messages.propTypes = {
  children: T.node.isRequired,
};

const Message = ({ children, header }) => (
  <li className={styles.item}>
    <div className={styles.itemHeader}>{header}</div>
    <div className={styles.itemBody}>{children}</div>
  </li>
);

Message.propTypes = {
  children: T.node.isRequired,
  header: T.node.isRequired,
};

Messages.Message = Message;

export { Messages };
