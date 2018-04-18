import * as types from './types';

console.log(types, ' this is types in action');

export const initialiazeUsername = (username) => ({
  type: types.INITIALIZE_USERNAME,
  username
});
