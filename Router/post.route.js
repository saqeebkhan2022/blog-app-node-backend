const  router = require("express").Router();
const postController = require("../controller/post.controller");

router.route("/api/v1/posts/getAll").get(postController.getAllPost);
router.route("/api/v1/posts/create-post").post(postController.createPost);
router.route("/api/v1/posts/:postId").get(postController.getPostById);
router.route("/api/v1/posts/update/:postId").put(postController.updatePost);
router.route("/api/v1/posts/delete/:postId").delete(postController.deletePost);

module.exports = router;
