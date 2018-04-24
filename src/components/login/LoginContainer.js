import React from 'react';
import { connect } from 'react-redux';
import { initialiazeUsername as setUsername } from '../../actions/message-actions';
import './styles/style.css'


const Login = ({setUsername}) => {

    return (
        <form className='username' onSubmit={(e) => {
          e.preventDefault();
          setUsername(this.input.value)

        }}>
        <input type='text' placeholder="username" ref={node => {

            this.input = node;
          }}/>
        <button>Submit</button>
      </form>
      )
}




const mapDispatchToProps = () => {
  return {
    initializeUsername: setUsername
  }
}




const mapDispatchToProps = (dispatch, route) => {
  return {
    setUsername: (username) => dispatch(setUsername(username, route))
  }

}


export default connect( null, mapDispatchToProps )( Login );
