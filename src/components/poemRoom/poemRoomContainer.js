import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUserPoemInput } from '../../actions/message-actions';
import RoomUser from './roomUser';
import PoemArea from './poemArea';
import './styles/style.css';




class PoemRoom extends Component {
  handleInput = (e) => {

    const { handlePoemInput } = this.props;
    console.log(e.currentTarget.value, ' in handleInput', handlePoemInput)
    handlePoemInput(e.currentTarget.value)
  }
  render(){



    return (
      <div>
        <RoomUser handlePoemInput={this.handleInput}/>
        <PoemArea />
      </div>
      )
  }
}



const mapStateToProps = (state) => {
  // console.log(state, ' this is state in chatroom Container')
  return {
    partner: state.poemRoom.poemPartner,
    username: state.username,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePoemInput: (text) => dispatch(handleUserPoemInput(text))
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( PoemRoom );
