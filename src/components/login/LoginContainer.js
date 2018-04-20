import React from 'react';
import { connect } from 'react-redux';
import { initialiazeUsername as setUsername } from '../../actions/message-actions';



const Login = ({setUsername}) => {

    return (
        <form onSubmit={(e) => {
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


// const mapStateToProps = (state) => {
//   return {
//     username: state.username
//   }
// }



const mapDispatchToProps = (dispatch, route) => {
  console.log(' this is something isomehtign', setUsername, route)
  return {
    setUsername: (username) => dispatch(setUsername(username, route))
  }

}


export default connect( null, mapDispatchToProps )( Login );
