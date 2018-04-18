import React, { Component, PropTypes } from 'react';


class Login extends Component {
  constructor(){
    super();

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
