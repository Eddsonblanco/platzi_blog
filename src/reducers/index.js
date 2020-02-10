import { combineReducers } from 'redux';
import usersReducers from './usersReducers'
import postsReducers from './postsReducers'







export default combineReducers({
    usersReducers,
    postsReducers

});
