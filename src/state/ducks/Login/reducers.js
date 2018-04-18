
const initialState = {
  username: ''
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


export default initializeUsernameReducer;
