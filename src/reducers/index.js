import {combineReducers} from 'redux'

const fetchPostsReducer= (fetchPosts=null, action)=>{
  if(action.type === 'FETCH_POSTS'){
      return action.payload;
  }
  return fetchPosts;
}

export default combineReducers({
  fetchPosts:fetchPostsReducer
});
