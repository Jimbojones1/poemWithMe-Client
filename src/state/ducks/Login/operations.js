import { initialiazeUsername } from './actions';


export const setInitialUsername = (socket) => {
  return (dispatch) => {
    // dispatch(clearAllItems())
    socket.emit('setInitialUsername', (username)=>{
       console.dir(username, 'this is usernmae in operations.js')
       dispatch(initialiazeUsername(username));
     })
  }
}
