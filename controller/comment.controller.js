const CommentModel = require('../model/comment')



// get all comment
const getAllComment = async (req,res) => {
    try{
        const comment = await CommentModel.find();
        res.json(comment);
    }catch(err){
        res.json(err);
    }
}

// create comment
const createComment = async (req,res) => {
    try {
        const { text } = req.body;
        const newComment = new CommentModel({ text });
        const savedComment = await newComment.save();
        res.json(savedComment);
    } catch (err) {
        res.json(err);
    }
}

// get comment by id

const getCommentById = async (req,res) =>{
    const commentId = req.params.commentId;
    try{
       const comment = await CommentModel.findById(commentId);
       res.json(comment);
    }catch(err){
        res.json(err);
    }
}

// update comment
const updateComment = async (req,res) =>{
    const commentId = req.params.commentId;
    try{
     const comment = await CommentModel.updateOne({ "_id":commentId},req.body);
     res.json(comment);
    }catch(err){
        res.json(err)
    }
}

// delete comment
const deleteComment = async (req,res) =>{
    const commentId = req.params.commentId;
    try{
     const comment = await CommentModel.findByIdAndDelete(commentId);
     res.json(comment);
    }catch(err){
        res.json(err)
    }
}

module.exports = {
    getAllComment,
    getCommentById,
    createComment,
    updateComment,
    deleteComment
}