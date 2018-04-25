import React, { Component } from 'react';


class RoomUser extends Component {
  render(){

    const {handlePoemInput, poemText} = this.props;
    console.log(handlePoemInput, ' this handlePoemInput', poemText, ' this poem text')
    return (
      <div id="roomUser">
        <textarea onChange={handlePoemInput} autoFocus="true" type='text' value={poemText}/>
      </div>
      )
  }
}

export default RoomUser;
