import { combineReducers } from 'redux';
import usersReducer from './users';
import activeUserReducer from './user_active'

const rootReducer = combineReducers({
  users: usersReducer,
  activeUser: activeUserReducer
});

export default rootReducer;
