import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
  constructor(){
    super();

    this.state = {
      username
    }
  }

  render(){
    console.log(this.props, ' login component props')
    return (
      <form>
        <input type='text' placeHolder="username" />
        <button onClick={}>Submit</button>
      </form>
      )
  }
}
