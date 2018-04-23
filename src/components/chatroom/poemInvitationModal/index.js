import React, { Component } from 'react';
import './styles/style.css';

class PoemInviteModal extends Component {

  render(){
    return (
      <div id= {this.props.modal ? "dialog" : "dialogClosed"}>
        <div id="button-modal">
          <button>PoemWithMe</button>
          <button>No Bitch</button>
        </div>
      </div>
    )
  }
}















export default PoemInviteModal;
