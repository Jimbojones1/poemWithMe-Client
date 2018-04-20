export const INITIALIZE_USERNAME = "login/INITIALIZE_USERNAME";
export const ADD_RESPONSE = "login/ADD_RESPONSE";
export const UPDATE_CHAT_USERS = 'chat/UPDATE_CHAT_USERS';
export const UPDATE_CHAT_BOXES = 'chat/UPDATE_CHAT_BOXES'

export function addResponse(message) {
  return { type: ADD_RESPONSE, message };
}


export const initialiazeUsername = (username, route) => ({
  type: INITIALIZE_USERNAME,
  username,
  route
});

export const updateChatUsers = (usernames) => ({
  type: UPDATE_CHAT_USERS,
  usernames
})

export const updateChatBoxers = (username) => ({
  type: UPDATE_CHAT_BOXES,
  username
})
