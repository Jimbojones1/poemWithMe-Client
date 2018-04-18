import React, { Component } from 'react';
import { connect } from 'react-redux';

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



// const mapDispatchToProps = () => {
//   return {
//     initializeUsername: setUsername
//   }
// }


export default connect( null, null )( LoginContainer );
