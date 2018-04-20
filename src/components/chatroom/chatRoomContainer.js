import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addChatBox  } from '../../actions/message-actions';
import UserList from './userList';


class ChatRoom extends Component {
  openChat = (e) => {
    this.props.addChatBox(e.currentTarget.innerText)
  }

  render(){
    const {usernames} = this.props;

    return (
      <div>
        <h2>Chat Container</h2>
        <UserList users={usernames} openChat={this.openChat}/>
      </div>
      )
  }
}



// state is passed to this function
const mapStateToProps = (state) => {
  console.log(state, ' in mapStateToProps')
  return {
    usernames: state.chat.usernames
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChatBox: (username) => dispatch(addChatBox(username))
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( ChatRoom );
