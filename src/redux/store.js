import { createStore, combineReducers } from "redux";
import wishlists from './reducers/wishlists';
import currentListView from './reducers/currentListView';
import users from './reducers/users';

const reducers = combineReducers({
  wishlists: wishlists,
  currentListView: currentListView,
  users: users
});

export default createStore(reducers);