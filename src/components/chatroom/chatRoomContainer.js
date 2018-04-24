import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addChatBox,  openChatBoxes, hanldePoemModal, emitPrivateMessage } from '../../actions/message-actions';
import UserList from './userList';
import PrivateMessageBox from './privateMessageBox';
import PoemInviteModal from './poemInvitationModal';


class ChatRoom extends Component {
  openChat = (e) => {
    this.props.addChatBox(e.currentTarget.innerText)
    this.props.openChat();

  }
  handleModelAnswer = (e) => {

    const { username, emitPrivateMessage, partner } = this.props;
    if(e.currentTarget.innerText === 'PoemWithMe') {
      emitPrivateMessage(username, partner, 'accepted poem invite')
    } else {
      emitPrivateMessage(username, partner, 'sorry, not right now.')
    }


  }
  render(){
    const {usernames, chatBoxesOpen, poemModal} = this.props;

    return (
      <div id="ChatRoom">
        <UserList users={usernames} openChat={this.openChat}/>
        {chatBoxesOpen ? <PrivateMessageBox addChat={this.openChat} /> : null}
        {poemModal ? <PoemInviteModal modal={poemModal} /> : null}
      </div>
      )
  }
}



// state is passed to this function
const mapStateToProps = (state) => {
  // console.log(state, ' this is state in chatroom Container')
  return {
    partner: state.poemRoom.partner,
    username: state.username,
    poemModal: state.chat.poemModal,
    usernames: state.chat.usernames,
    chatBoxesOpen: state.chat.boxesOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChatBox: (username) => dispatch(addChatBox(username)),
    openChat: () => dispatch(openChatBoxes()),
    hanldePoemModal: () => dispatch(hanldePoemModal()),
    emitPrivateMessage: (username, recipient, message) => dispatch(emitPrivateMessage(username, recipient, message))

  }
}


export default connect( mapStateToProps, mapDispatchToProps )( ChatRoom );
