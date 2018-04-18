import { combineReducers } from "redux";


const initialState = {
  username: '',
  messages: []
}


const initializeUsernameReducer = (state=initialState, action) => {
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


const messageReducer = (state=initialState, action) => {

  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...action.messages]
      }
     default:
        return state
  }
}


export default combineReducers({
  messageReducer,
  initializeUsernameReducer,
});
