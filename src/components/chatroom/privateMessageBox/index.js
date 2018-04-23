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
    submitMessage = (recipient, e) => {

      if(e.charCode === 13){
        console.log(this.props, 'being called')
        this.props.emitPrivateMessage(recipient, e.currentTarget.value)
        e.currentTarget.value = ''
      }
      // socket.emit('pm')
    }
    render(){

      const { chatBoxes } = this.props;


      const userBoxes = chatBoxes.map((user, i) => {
        return   <div className="PrivateMessageBox five columns" key={i}>
                    <PrivateMessageHeader user={user} removeBox={this.removeBox}/>
                    <PrivateMessageArea />
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
    chatBoxes: state.chat.chatBoxes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    emitPrivateMessage: (recipient, message) => dispatch(emitPrivateMessage(recipient, message)),
    closeChatBoxes: (username) => dispatch(closeChatBoxes(username))
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( PrivateMessageBox );
