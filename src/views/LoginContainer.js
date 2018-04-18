import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../state/ducks/Login';
import Login from './Login';

console.log(Login, ' this from login')

class LoginContainer extends Component {
  render() {
    console.log(this.props, ' in LoginController')
    return (
      <Login />
      )
  }
}

const func = () => {
  return 'hi'
}

const mapDispatchToProps = () => {
  return {
    initializeUsername: setUsername
  }
}


export default connect( null, mapDispatchToProps )( LoginContainer );
