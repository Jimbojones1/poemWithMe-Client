import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from '../login';
import About from '../about';

const App = () => (
  <div>
    <header>
      <Link to="/">Login</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
    </main>
  </div>
)

export default App;
