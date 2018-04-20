import React from 'react'
import { Route, Link } from 'react-router-dom';
import LoginContainer from '../login/loginContainer';
import ChatRoom from '../chatroom/chatRoomContainer';

const App = () => (
  <div>
    <header>
      <Link to="/">Login</Link>
    </header>

    <main>
      <Route exact path="/" component={ LoginContainer } />
      <Route exact path="/chat" component={ ChatRoom } />
    </main>
  </div>
)

export default App;
