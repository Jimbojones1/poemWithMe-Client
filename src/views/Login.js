import React, { Component, PropTypes } from 'react';
import io from 'socket.io-client';
let socket;

class Login extends Component {
  constructor(){
    super();


    socket = io.connect('http://localhost:4000');
    this.state = {
      username: ''
    }
  }

  render(){
    console.log(this.props, ' login component props')
    return (
      <form>
        <input type='text' placeholder="username" />
        <button >Submit</button>
      </form>
      )
  }
}

export default Login;
