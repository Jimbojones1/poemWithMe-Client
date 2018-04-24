import React from 'react'
import { Route, Link } from 'react-router-dom';
import LoginContainer from '../login/loginContainer';
import ChatRoom from '../chatroom/chatRoomContainer';
import PoemRoom from '../poemRoom/poemRoomContainer';
import './app.css';

const App = () => (
    <main>
      <Route exact path="/" component={ LoginContainer } />
      <Route exact path="/chat" component={ ChatRoom } />
      <Route exact path="/poemRoom" component= { PoemRoom } />
    </main>
)

export default App;
