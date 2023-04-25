import {call, takeLatest,put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostsSaga(action){
    try {
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getPostsSuccess(posts.data)); // posts.data it'll return array instead return all of data in store
        console.log('[posts]', posts)
      } catch (err) {
        console.error(err);
        yield put(actions.getPosts.getPostsFailure(err));
      }
}   

function* createPostSaga(action){
  try {
      const post = yield call(api.createPost, action.payload); // with effect call, pass parameters for first function 
      yield put(actions.createPost.createPostSuccess(post.data)); // posts.data it'll return array instead return all of data in store
      console.log('[CreatePostSaga]', post)
    } catch (err) {
      console.error(err);
      yield put(actions.createPost.createPostFailure(err));
    }
}   

function* updatePostSaga(action){
  try {
      const updatedPost = yield call(api.updatePost, action.payload); // with effect call, pass parameters for first function 
      yield put(actions.updatePost.updatePostSuccess(updatedPost.data)); // posts.data it'll return array instead return all of data in store
      console.log('[updatePostSaga]', updatedPost)
    } catch (err) {
      console.error(err);
      yield put(actions.updatePost.updatePostFailure(err));
    }
}   
function* deletePostSaga(action){
  try {
      const deletedPost = yield call(api.deletePost, action.payload); // with effect call, pass parameters for first function 
      yield put(actions.deletePost.deletePostSuccess(deletedPost.data)); // posts.data it'll return array instead return all of data in store
      console.log('[deletePostSaga]', deletedPost)
    } catch (err) {
      console.error(err);
      yield put(actions.deletePost.deletePostFailure(err));
    }
}  
 

function* mySaga(){
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga );
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga );
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga );
    yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga );
}

//generator function ES6

export default mySaga;