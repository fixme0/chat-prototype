import React from 'react';
import { useSelector } from 'react-redux';

import { getMessages } from './services/messages';
import { getIsAuthenticated } from './services/user';

import { RenderWhen } from './components/RenderWhen';
import { Chat } from './components/chat/Chat';
import { Messages } from './components/chat/Messages';
import { State } from './components/chat/State';
import { UserController } from './components/UserController';

const App = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const messages = useSelector(getMessages);

  return (
    <Chat.Wrapper>
      <Chat.Body>
        <RenderWhen isTrue={isAuthenticated}>
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
        {!isAuthenticated && <State.Login />}
      </Chat.Body>
      <Chat.Footer>
        <UserController />
      </Chat.Footer>
    </Chat.Wrapper>
  );
};

export { App };
