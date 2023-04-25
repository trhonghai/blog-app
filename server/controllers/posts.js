import { PostModel } from "../models/PostModel.js";

export  const getPosts = async (req, res)=>{
   try{
    
    

    // when call find(), It'll return all of posts, because It's a promise, so we need await
    // function contains it that we need keyword async
        const posts = await PostModel.find();  
        console.log('posts', posts)
        
        res.status(200).json(posts);

   }catch(err){
        req.status(500).json({error: err});
   }
};

export const createPost = async (req, res) => {
    try {
        const newPost = req.body; // get data from client
        const post = new PostModel(newPost);
        await post.save();

        res.status(200).json(post)

    } catch (err) {
        req.status(500).json({error: err});
    }
}

export const updatePost = async (req, res) =>{
    try {
        const updatePost = req.body;
        const post = await PostModel.findOneAndUpdate(
            { _id: updatePost._id}, 
            updatePost, 
            { new: true}
        );

        res.status(200).json(post);
    } catch (error) {
        req.status(500).json({error: err});
    }
}

export const deletePost = async (req, res) =>{
    try {
        const deletePost = req.body;
        const post = await PostModel.findByIdAndRemove(
            { _id: deletePost._id},
            deletePost,
        );

        res.status(200).json(post);
    } catch (error) {
        req.status(500).json({error: err});
    }
}