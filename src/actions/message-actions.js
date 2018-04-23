export const INITIALIZE_USERNAME = "login/INITIALIZE_USERNAME";
export const ADD_RESPONSE = "login/ADD_RESPONSE";
export const UPDATE_CHAT_USERS = 'chat/UPDATE_CHAT_USERS';
export const ADD_CHAT_BOX = 'chat/ADD_CHAT_BOX';
export const CHAT_BOXES_OPEN = 'chat/BOXES_OPEN';
export const CHAT_BOXES_CLOSED = 'chat/BOXES_CLOSED';

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

export const addChatBox = (username) => ({
  type: ADD_CHAT_BOX,
  username
})

export const openChatBoxes = () => ({
  type: CHAT_BOXES_OPEN
});

export const closeChatBoxes = (user) => ({
  type: CHAT_BOXES_CLOSED,
  user
})
