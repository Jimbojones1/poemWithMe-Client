import { types } from './types';

export const initialiazeUsername = (username) => ({
  type: types.INITIALIZE_USERNAME,
  username
});
