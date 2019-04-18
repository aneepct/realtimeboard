import axios from 'axios';

import { 
  GET_ERRORS, 
  CREATE_POST, 
  GET_POSTS, 
  DELETE_POSTS 
} from "./types";

/**
 * Register user and redirect to login if success
 * @param {Object} postData 
 * @param {Object} history 
 */
export const createPost = (postData, history) => dispatch => {
  axios
    .post('/api/post/create', postData)
    .then(res => dispatch({
        type: CREATE_POST,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const getPosts = (totalPosts) => dispatch => {
  axios
    .get('/api/post/all/'+totalPosts)
    .then(res => dispatch({
        type: GET_POSTS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const deletPost = (postId) => dispatch => {
  axios
    .delete('/api/post/delete/'+postId)
    .then(res => dispatch({
        type: DELETE_POSTS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}