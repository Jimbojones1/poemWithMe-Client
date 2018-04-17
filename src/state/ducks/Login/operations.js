import { initialiazeUsername } from './actions';


export const setInitialUsername = (socket) => {
  return (dispatch) => {
    // dispatch(clearAllItems())
    socket.emit('setInitialUsername', (username)=>{
       console.dir(res, 'this is usernmae in operations.js')
       dispatch(initialiazeUsername(username));
     })
  }
}
