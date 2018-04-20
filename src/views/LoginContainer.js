import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../state/ducks/Login';
import Login from './Login';



class LoginContainer extends Component {
  onSubmit = e => {
    console.log(e)
    this.props.initializeUsername(username)
  }
  onChange = () => {
    this.props.initializeUsername(username)
  }
  render() {
    {username, initializeUsername } = this.props
    console.log(this.props, ' in LoginController')
    return (
      <form onSubmit={}>
        <input onChange={this.handleChange}type='text' placeholder="username" value={username}/>
        <button >Submit</button>
      </form>
      )
  }
}



const mapStateToProps = (state) => {
  console.log(state, 'in mapDispatchToProps')
  return {username: state.username}
}

const mapDispatchToProps = () => {
  return {
    initializeUsername: setUsername
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( LoginContainer );
