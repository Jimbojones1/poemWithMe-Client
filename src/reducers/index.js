import { combineReducers } from "redux";


const initializeUsernameReducer = (state={}, action) => {
  console.log(action, ' this is action', state, ' this is state in reducer')
  switch (action.type) {
    case 'login/INITIALIZE_USERNAME':
        // console.log('hitting, in reducer', action.username, state, 'stateee')
        // console.log({username: action.username})
        return {
            username: action.username
        }
    default:

      return state

  }
}


const handleChatReducer = (state={}, action) => {

  switch (action.type){
    case 'chat/UPDATE_CHAT_USERS':
    console.log(state, 'in handle Chat Reducer')
      return [
        ...action.usernames
      ]


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
  usernames: handleChatReducer
});
