import io from 'socket.io-client';
import * as actions from './actions/message-actions';

export default function(store) {
  const socket = io.connect('lhttp://localhost:4000/');

  socket.on('message', message => {
    store.dispatch(actions.addResponse(message));
  });
}
