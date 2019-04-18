import { CREATE_POST, GET_POSTS, DELETE_POSTS } from '../actions/types';

const initialState = {
  single: {},
  all: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        single: action.payload
      }
    case GET_POSTS:
      return {
        ...state,
        all: action.payload
      }
    case DELETE_POSTS:
      return {
        ...state,
        single: action.payload
      }
    default:
      return state;
  }
}