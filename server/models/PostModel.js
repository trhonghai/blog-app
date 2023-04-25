import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        default: 'Anonymous'
    },
    attachment: String, // during process of adding posts, the author can add attachment
    likeCount: {
        type:Number,
        default: 0
    }

    
},{timestamps: true})

export const PostModel = mongoose.model('Post', schema);