import io from 'socket.io-client';
import * as actions from './actions/message-actions';

let socket = null;

export function chatMiddleWare(store, what){
  return next => action => {
    const result = next(action);
    console.log('chat middleware being called')
    if(socket && action.type === actions.INITIALIZE_USERNAME){
      // send socket emit message
      // console.log('inside if and action.type')
      const {username }= store.getState()

      socket.emit('setInitialUsername', username);
      action.route.history.push('/chat')
      // store.dispatch()
    }

    return result;
  }
}



export default function(store) {
  socket = io.connect('http://localhost:4000');

  socket.on('updateUsers', (usernames) => {
    console.log(usernames, ' this is username')
    store.dispatch(actions.updateChatUsers(usernames));
  });


  socket.on('message', message => {
    console.log('message: ', message)
    store.dispatch(actions.addResponse(message));
  });
}
