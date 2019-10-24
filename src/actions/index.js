import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts =() => async (dispatch) =>{
    const response= await jsonPlaceHolder.get('/posts');

    dispatch ({
      type: 'FETCH_POSTS',
      payload: response.data
    });
};

export const fetchUser =() => async (dispatch) =>{
    const response= await jsonPlaceHolder.get('/users');

    dispatch ({
      type: 'FETCH_USER',
      payload: response.data
    });
};
