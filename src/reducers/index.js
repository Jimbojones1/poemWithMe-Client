import { combineReducers } from "redux";





const initializeUsernameReducer = (state={}, action) => {
  console.log(action, ' this is action')
  switch (action.type) {
    case 'INITIALIZE_USERNAME':
        console.log('hitting, in reducer')
        return {
            ...state,
            username: action.username
        }
    default:

      return state

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
});
