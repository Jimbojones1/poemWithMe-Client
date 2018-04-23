import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/styles.css';
import PrivateMessageHeader from '../privateMessageHeader';
import PrivateMessageInput from '../privateMessageInput';
import PrivateMessageArea from '../privateMessageArea';


class PrivateMessageBox extends Component {
    removeBox = (user) => {
      console.log(user, 'this is user')
    }
    render(){

      const { chatBoxes } = this.props;


      const userBoxes = chatBoxes.map((user, i) => {
        return   <div className="PrivateMessageBox five columns" key={i}>
                    <PrivateMessageHeader user={user} removeBox={this.removeBox}/>
                    <PrivateMessageArea />
                    <PrivateMessageInput />
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addChatBox: (username) => dispatch(addChatBox(username))
//   }
// }


export default connect( mapStateToProps, null )( PrivateMessageBox );
