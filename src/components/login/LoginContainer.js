import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialiazeUsername as setUsername } from '../../actions/message-actions';
import Login from './Login';



class LoginContainer extends Component {
  constructor(){
    super();
    this.state ={
      username: ''
    }
  }
  onChange = (e) => {

    // this.setState({username: e.currentTarget.value})
    // this.props.setUsername(e.currentTarget.value);
  }

  render() {
    return (
      <Login handleInput={this.onChange} setUsername={this.props.setUsername}/>
      )
  }
}



const mapStateToProps = (state) => {
  console.log(state, 'in mapDispatchToProps')
  return {username: state.username}
}

const mapDispatchToProps = (dispatch) => {
  console.log(' this is something isomehtign', setUsername)
  return {
    setUsername
  }

}


export default connect( mapStateToProps, mapDispatchToProps )( LoginContainer );
