const PostModel = require('../model/post');

// get all posts
const getAllPost = async (req,res) => {
    try{
        const Post = await PostModel.find();
        res.json(Post);
    }catch(err){
        res.json(err);
    }
}

// create posts

const createPost = async (req,res) => {
    try {
        const { title, content, author } = req.body;
        const newPost = new PostModel({ title, content, author });
        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (err) {
        res.json(err);
    }
}

// get post by id

const getPostById = async (req,res) =>{
    const postId = req.params.postId;
    try{
       const post = await PostModel.findById(postId);
       res.json(post);
    }catch(err){
        res.json(err);
    }
}

// update post
const updatePost = async (req,res) =>{
    const postId = req.params.postId;
    try{
     const post = await PostModel.updateOne({ "_id":postId},req.body);
     res.json(post);
    }catch(err){
        res.json(err)
    }
}

// delete post
const deletePost = async (req,res) =>{
    const postId = req.params.postId;
    try{
     const post = await PostModel.findByIdAndDelete(postId);
     res.json(post);
    }catch(err){
        res.json(err)
    }
}

module.exports = {
    getAllPost,
    getPostById,
    createPost,
    updatePost,
    deletePost
}