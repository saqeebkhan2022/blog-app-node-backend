const  router = require("express").Router();
const commentController = require('../controller/comment.controller')

router.route("/api/v1/comment/getAll").get(commentController.getAllComment);
router.route("/api/v1/comment/create-comment").post(commentController.createComment);
router.route("/api/v1/comment/:commentId").get(commentController.getCommentById);
router.route("/api/v1/comment/update-comment/:commentId").put(commentController.updateComment);
router.route("/api/v1/comment/delete-comment/:commentId").delete(commentController.deleteComment);

module.exports = router;