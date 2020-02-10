import axios from 'axios';
import { GET_ALL_POST_BY_USER } from '../types/postsType'
import * as usersTypes from '../types/usersTypes'


const { GET_ALL: GET_ALL_USERS } = usersTypes;


export const getByUser = (key) => async (dispatch, getState) =>{
    const { users } = getState().usersReducers;
    const { posts } = getState().postsReducers;
    const user_id = users[key].id;
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

    const updatedPosts = [
           ...posts,
              data
     ]
   const posts_key = updatedPosts.length - 1;

   const updatedUser = [ ...users ];
   updatedUser[key] = {
       ...users[key],
       posts_key
   }

   dispatch({
       type: GET_ALL_USERS,
       payload: updatedUser
   });

    dispatch({
        type:GET_ALL_POST_BY_USER,
        payload: updatedPosts
    })

}