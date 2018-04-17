import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loginOperations } from '../state/ducks/login';
import Login from './Login';


class LoginContainer extends Component {
  render() {
    return (
      <Login />
      )
  }
}


const mapDispatchToProps = () => {
  initializeUsername: loginOperations.initializeUsername();
}


export default connect( null, mapDispatchToProps )( LoginContainer );
