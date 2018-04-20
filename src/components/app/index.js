import React from 'react'
import { Route, Link } from 'react-router-dom';
import LoginContainer from '../login/LoginContainer';


const App = () => (
  <div>
    <header>
      <Link to="/">Login</Link>
    </header>

    <main>
      <Route exact path="/" component={LoginContainer} />
    </main>
  </div>
)

export default App;
