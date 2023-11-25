import React from 'react';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from './services/user';

import { Chat } from './components/chat/Chat';
import { State } from './components/chat/State';
import { UserController } from './components/UserController';

const App = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Chat.Wrapper>
      <Chat.Body>
        {!isAuthenticated && (
          <State.Login />
        )}
      </Chat.Body>
      <Chat.Footer>
        <UserController />
      </Chat.Footer>
    </Chat.Wrapper>
  );
};

export { App };
