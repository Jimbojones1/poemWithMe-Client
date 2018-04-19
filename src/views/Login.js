import React, { Component, PropTypes } from 'react';
import io from 'socket.io-client';
let socket;

class Login extends Component {
  onSubmit(e){

  }
  render(){
    console.log(this.props, ' login component props')
    return (
      <form onSubmit>
        <input type='text' placeholder="username" />
        <button >Submit</button>
      </form>
      )
  }
}

export default Login;
