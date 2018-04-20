import React, { Component, PropTypes } from 'react';

class Login extends Component {
  render(){
    console.log(this.props, ' login component props')
    return (
      <form onSubmit={}>
        <input type='text' placeholder="username" />
        <button >Submit</button>
      </form>
      )
  }
}

export default Login;
