import axios from 'axios';
import { UPDATE, LOADING } from '../types/postsType'
import * as usersTypes from '../types/usersTypes'


const { GET_ALL: GET_ALL_USERS } = usersTypes;


export const getByUser = (key) => async (dispatch, getState) =>{

    dispatch({
        type: LOADING,
    });

    const { users } = getState().usersReducers;
    const { posts } = getState().postsReducers;
    const user_id = users[key].id;

    try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

        const news = data.map((posts) => ({
            ...posts,
            comments:[],
            open: false
        }))

        const updatedPosts = [
            ...posts,
                news
        ]
        dispatch({
            type:UPDATE,
            payload: updatedPosts
        })

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

        
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: usersTypes.ERROR,
            payload: 'Sorry, Posts no available'
        })
    }
    

    

}

export const openAndClose = (posts_key, comment_key) =>  (dispatch, getState) =>{
    const { posts } = getState().postsReducers;
    const selected = posts[posts_key][comment_key];

    const selectedUpdated = {
        ...selected,
        open: !selected.open
    };

    const updatedPosts = [ ...posts];
    updatedPosts[posts_key] = [
        ...posts[posts_key]
    ];
    updatedPosts[posts_key][comment_key ] = selectedUpdated
    
    dispatch({
        type:UPDATE,
        payload: updatedPosts
    })
}

export const getComments = ( posts_key, comment_key ) => async (dispatch, getState) => {
    const { posts } = getState().postsReducers;
    const selected = posts[posts_key][comment_key];

    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`);
    
    const selectedUpdated = {
        ...selected,
        comments: response.data
    };

    const updatedPosts = [ ...posts];
    updatedPosts[posts_key] = [
        ...posts[posts_key]
    ];
    updatedPosts[posts_key][comment_key ] = selectedUpdated

    dispatch({
        type:UPDATE,
        payload: updatedPosts
    })
}