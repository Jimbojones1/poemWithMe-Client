import React, { Component } from 'react';


class RoomUser extends Component {
  render(){

    const {handlePoemInput} = this.props;
    console.log(handlePoemInput, ' this handlePoemInput')
    return (
      <div id="roomUser">
        <textarea onChange={handlePoemInput} autoFocus="true" type='text'/>
      </div>
      )
  }
}

export default RoomUser;
