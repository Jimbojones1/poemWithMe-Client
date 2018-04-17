import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit is runnign')

  }

  render(){
    console.log(this.props, ' login component props')
    return (
      <form>
        <button onClick={this.handleSubmit}>turn on</button>
      </form>
      )
  }
}
