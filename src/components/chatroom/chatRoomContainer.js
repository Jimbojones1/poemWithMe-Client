import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialiazeUsername  } from '../../actions/message-actions';
import UserList from './userList';


class ChatRoom extends Component {

  render(){
    console.log(this.props, ' in chat Rooom')
    return (
      <div>
        <h2>Chat Container</h2>
        <UserList users={this.props.usernames}/>
      </div>
      )
  }
}



// state is passed to this function
const mapStateToProps = (state) => {
  console.log(state, ' in mapStateToProps')
  return {
    usernames: [...state.usernames]
  }
}


export default connect( mapStateToProps, null )( ChatRoom );
