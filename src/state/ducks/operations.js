import { types } from './types'


const loginReducer = (state, action ) => {
    switch( action.type ) {
        case types.INITIALIZE_USERNAME
              : return true;
        /* ... */
        default: return state;
    }
}
