export const INITIALIZE_USERNAME = "login/INITIALIZE_USERNAME";
export const ADD_RESPONSE = "login/ADD_RESPONSE";

export function addResponse(message) {
  return { type: ADD_RESPONSE, message };
}


export const initialiazeUsername = (username) => ({
  type: INITIALIZE_USERNAME,
  username
});
