import React from 'react'
import { Route, Link } from 'react-router-dom';
import LoginContainer from '../login/loginContainer';
import ChatRoom from '../chatroom/chatRoomContainer';
import './app.css';

const App = () => (
    <main>
      <Route exact path="/" component={ LoginContainer } />
      <Route exact path="/chat" component={ ChatRoom } />
    </main>
)

export default App;
