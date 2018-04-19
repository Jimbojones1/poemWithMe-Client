import io from 'socket.io-client';
import * as actions from './actions/message-actions';

let socket = null;

export function chatMiddleWare(store){
  return next => action => {
    const result = next(action);

    if(socket && action.type === actions.ADD_RESPONSE){
      // send socket emit message
      const messages = store.getState()
      console.log(messages, ' this is messages')
      socket.emit('message', messages[messages.length -1]);
    }
  }
}



export default function(store) {
  socket = io.connect('http://localhost:4000');

  socket.on('message', message => {
    console.log('message: ', message)
    store.dispatch(actions.addResponse(message));
  });
}
