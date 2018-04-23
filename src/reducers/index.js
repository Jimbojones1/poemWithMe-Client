import { combineReducers } from "redux";


const initializeUsernameReducer = (state={}, action) => {

  switch (action.type) {
    case 'login/INITIALIZE_USERNAME':
        console.log(action.username, ' in init username', state)
        // console.log('hitting, in reducer', action.username, state, 'stateee')
        // console.log({username: action.username})
        return action.username
    default:

      return state

  }
}


const handleChatReducer = (state={}, action) => {

  switch (action.type){
    case 'chat/UPDATE_CHAT_USERS':

       return {
            ...state,
            usernames: [...action.usernames]
        }
    case 'chat/ADD_CHAT_BOX':
       return {
          ...state,
          chatBoxes: [...state.chatBoxes, action.username]
       }
    case 'chat/BOXES_OPEN':
      return {
        ...state,
        boxesOpen: true
      }
    case 'chat/BOXES_CLOSED':
      return {
        ...state,
        chatBoxes: [...state.chatBoxes.filter((user) => user !== action.user )]
      }
    case 'chat/PM':

      const msgObject = {
        from: action.username,
        recipient: action.recipient,
        message: action.message
      }

      return {
        ...state,
        prvMsgData: [...state.prvMsgData, msgObject]
      }

    default:
      return state;
  }
}






const messageReducer = (state={}, action) => {
  switch (action.type) {
    case 'login/ADD_RESPONSE':
      return {
        ...state,
        messages: [...action.message]
      }
     default:
        return state
  }
}


export default combineReducers({
  messages: messageReducer,
  username: initializeUsernameReducer,
  chat: handleChatReducer
});
