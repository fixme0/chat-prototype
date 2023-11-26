import React from 'react';
import { useSelector } from 'react-redux';

import { getMessages } from './services/messages';

import { getIsFetchingMessages } from './store/selectors';

import { RenderWhen } from './components/RenderWhen';
import { Chat } from './components/chat/Chat';
import { Messages } from './components/chat/Messages';
import { State } from './components/chat/State';
import { UserController } from './components/UserController';

const App = () => {
  const isFetchingMessages = useSelector(getIsFetchingMessages);
  const messages = useSelector(getMessages);

  return (
    <Chat.Wrapper>
      <Chat.Body>
        <RenderWhen isTrue>
          <RenderWhen.If isTrue={isFetchingMessages}>
            <State.Loading />
          </RenderWhen.If>
          <RenderWhen.If isTrue={!!messages.length}>
            <Messages>
              {messages.map(({ id, message, user }) => (
                <Messages.Message header={user.name} key={id}>
                  {message}
                </Messages.Message>
              ))}
            </Messages>
          </RenderWhen.If>
          <RenderWhen.If isTrue>
            <State.EmptyMessages />
          </RenderWhen.If>
        </RenderWhen>
      </Chat.Body>
      <Chat.Footer>
        <UserController />
      </Chat.Footer>
    </Chat.Wrapper>
  );
};

export { App };
