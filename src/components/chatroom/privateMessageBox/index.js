import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/styles.css';
import { closeChatBoxes, emitPrivateMessage } from '../../../actions/message-actions';
import PrivateMessageHeader from '../privateMessageHeader';
import PrivateMessageInput from '../privateMessageInput';
import PrivateMessageArea from '../privateMessageArea';


class PrivateMessageBox extends Component {
    removeBox = (user) => {
      this.props.closeChatBoxes(user);
    }
    sortMessages = (from) => {
      const { username } = this.props;
      if(username === from){
        return 'sender';
      } else {
        return 'recipient'
      }
    }
    submitMessage = (recipient, e) => {

      console.log(e.charCode, ' this is e.charCode', e.currentTarget, e.currentTarget.value)

      if(e.charCode === 13){

        const {username, emitPrivateMessage} = this.props;
        const message = e.currentTarget.value;
        emitPrivateMessage(username, recipient, message)
        e.currentTarget.value = ''
      }
      // socket.emit('pm')
    }
    render(){

      const { chatBoxes } = this.props;

      console.log(this.props, 'in private message box')

      const userBoxes = chatBoxes.map((user, i) => {
        return   <div className="privateMessageBox five columns" key={i}>
                    <PrivateMessageHeader user={user} removeBox={this.removeBox}/>
                    <PrivateMessageArea  prvMsgData={this.props.prvMsgData} user={user} sortMessages={this.sortMessages}/>
                    <PrivateMessageInput submitMessage={this.submitMessage} user={user}/>
                 </div>
               })

        return (
           <div id="prvBoxArea" className="container">
              <div className="row">
                {userBoxes}
              </div>
            </div>
          )
        }
     }


  // state is passed to this function
const mapStateToProps = (state) => {
  console.log(state, ' in mapStateToProps')
  return {
    username: state.username,
    chatBoxes: state.chat.chatBoxes,
    prvMsgData: state.chat.prvMsgData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    emitPrivateMessage: (username, recipient, message) => dispatch(emitPrivateMessage(username, recipient, message)),
    closeChatBoxes: (username) => dispatch(closeChatBoxes(username))
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( PrivateMessageBox );
