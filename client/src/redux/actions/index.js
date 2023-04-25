import {createActions, createAction} from 'redux-actions';

export const getType = (reduxAction) =>{
    return reduxAction().type;
}



export const getPosts = createActions({
    getPostsRequest : undefined,
    getPostsSuccess : (payload) => payload,
    getPostsFailure : (err) => err,
});

export const createPost = createActions({
    createPostRequest : (payload) => payload, // send a payload data to server
    createPostSuccess : (payload) => payload,
    createPostFailure : (err) => err,
});

export const updatePost = createActions({
    updatePostRequest : (payload) => payload, // send a payload data to server
    updatePostSuccess : (payload) => payload,
    updatePostFailure : (err) => err,
});

export const deletePost = createActions({
    deletePostRequest : (payload) => payload, // send a payload data to server
    deletePostSuccess : (payload) => payload,
    deletePostFailure : (err) => err,
});


export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');


/**
 * every action is a function
 * each function will return a object
 * {
 *  type: 'getPostsSuccess',
 *  payload: payload
 * }
 */