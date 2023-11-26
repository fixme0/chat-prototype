import React from 'react';
import T from 'prop-types';

import { withProps } from '../../../hocs/withProps';

import { ReactComponent as EmptyMessagesIcon } from './icons/empty_messages';
import { ReactComponent as LoadingIcon } from './icons/loading';
import styles from './styles';

const State = ({ content, icon: Icon }) => (
  <div className={styles.root}>
    <Icon />
    <span className={styles.text}>
      {content}
    </span>
  </div>
);

State.propTypes = {
  content: T.node.isRequired,
  icon: T.elementType,
};

const LoadingState = withProps({
  content: 'Downloading messages, please wait',
  icon: LoadingIcon,
})(State);

LoadingState.displayName = 'LoadingState';

const EmptyMessagesState = withProps({
  content: 'Empty message list.',
  icon: EmptyMessagesIcon,
})(State);

EmptyMessagesState.displayName = 'EmptyMessagesState';

State.EmptyMessages = EmptyMessagesState;
State.Loading = LoadingState;

export { State };
