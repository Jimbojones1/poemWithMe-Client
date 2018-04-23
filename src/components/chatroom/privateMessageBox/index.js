import React, { Component } from 'react';
import { connect } from 'react-redux';




class PrivateMessageBox extends Component {
    removeClick = (user) => {
      // this.props.removeBox(user);
    }
    render(){

      const { chatBoxes } = this.props;


      const userBoxes = chatBoxes.map((user, i) => {
        return   <div className="PrivateMessageBox five columns" key={i}>
                  {user}
                 </div>
               })

        return (
           <div>{userBoxes}</div>
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
