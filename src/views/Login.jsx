import React, { Component, PropTypes } from 'react';
import io from 'socket.io-client';
let socket;

export default class Login extends Component {
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
        <input type='text' placeHolder="username" />
        <button onClick={this.props.initializeUsername(socket, this.state.username)}>Submit</button>
      </form>
      )
  }
}
