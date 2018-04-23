import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addChatBox,  openChatBoxes } from '../../actions/message-actions';
import UserList from './userList';
import PrivateMessageBox from './privateMessageBox';

class ChatRoom extends Component {
  openChat = (e) => {
    this.props.addChatBox(e.currentTarget.innerText)
    this.props.openChat();

  }

  render(){
    const {usernames, chatBoxesOpen} = this.props;

    return (
      <div id="ChatRoom">
        <UserList users={usernames} openChat={this.openChat}/>
        {chatBoxesOpen ? <PrivateMessageBox addChat={this.openChat} /> : null}
      </div>
      )
  }
}



// state is passed to this function
const mapStateToProps = (state) => {
  console.log(state, ' this is state in chatroom Container')
  return {
    usernames: state.chat.usernames,
    chatBoxesOpen: state.chat.boxesOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChatBox: (username) => dispatch(addChatBox(username)),
    openChat: () => dispatch(openChatBoxes())
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( ChatRoom );
