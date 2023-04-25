import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

//  API

router.get('/',getPosts );

router.post('/', createPost)

router.post('/update', updatePost);

router.post('/delete', deletePost)

export default router;