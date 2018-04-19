import { combineReducers } from "redux";





const initializeUsernameReducer = (state={}, action) => {
  console.log(action, ' this is action in initialzieUsernameReducer')
  switch (action.type) {
    case 'INITIALIZE_USERNAME':
        return {
            ...state,
            username: action.username
        }
    default:

      return state

  }
}


const messageReducer = (state={}, action) => {
  console.log('messageReducer', action)
  switch (action.type) {
    case 'login/ADD_RESPONSE':
    console.log('hitting in reducerrrrrrr')
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
