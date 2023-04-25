import React from 'react';
import {Grid} from '@material-ui/core';
import Post from './Post';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/actions'
import { postsState$ } from '../../redux/selectors';

// calling API to get database necessary
export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  
  console.log('[PostList - posts]', posts);
  
  // trigger action in getPostsRequest() of React
  React.useEffect(() =>{
    dispatch(actions.getPosts.getPostsRequest()); 
    // this effect will re-render when it have a change dispatch
  },[dispatch]);

  return (
    <Grid container spacing={2} alignItems='stretch'>

      {posts.map( (post) =>(

        <Grid item xs={12} sm={6}>
          <Post key={post._id} post={post} />
        </Grid>
      ) )}

     </Grid>
  )
}
