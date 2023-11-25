import React, { useEffect, useRef } from 'react';
import T from 'prop-types';

import styles from './styles';

const Body = ({ children }) => {
  const bodyRef = useRef(null);

  useEffect(() => {
    const { current: nodeDOM } = bodyRef;

    const observer = new MutationObserver(([mutation]) => {
      if (mutation.addedNodes.length) {
        const shouldScrollToBottom = nodeDOM.scrollHeight > nodeDOM.clientHeight;

        if (shouldScrollToBottom) {
          nodeDOM.scrollTo({
            top: nodeDOM.scrollHeight,
            behavior: 'smooth',
          });
        }
      }
    });

    observer.observe(nodeDOM, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.body} ref={bodyRef}>
      {children}
    </div>
  );
};

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
