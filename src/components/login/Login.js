import React from 'react';


const Login = ({handleInput, setUsername}) => {


    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('submit is happending')
        setUsername(this.input.value)
        console.log(setUsername(), ' this in onSubmit')
      }}>
        <input type='text' placeholder="username" onKeyPress={handleInput} ref={node => {

            this.input = node;
          }}/>/>
        <button >Submit</button>
      </form>
      )
}

export default Login;
