import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUserPoemInput } from '../../actions/message-actions';
import RoomUser from './roomUser';
import PoemArea from './poemArea';
import Timer from './timer';
import './styles/style.css';




class PoemRoom extends Component {
  handleInput = (e) => {

    const { handlePoemInput } = this.props;
    handlePoemInput(e.currentTarget.value, true)
  }
  render(){

    const { poemText } = this.props;

    return (
      <div className='container'>
        <div className='row'>
          <RoomUser/>
          <PoemArea  handlePoemInput={this.handleInput} poemText={poemText}/>
          <Timer />
        </div>
      </div>
      )
  }
}



const mapStateToProps = (state) => {
  // console.log(state, ' this is state in chatroom Container')
  return {
    partner: state.poemRoom.poemPartner,
    username: state.username,
    poemText: state.poemRoom.userTextArea
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePoemInput: (text, sending) => dispatch(handleUserPoemInput(text, sending))
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( PoemRoom );
