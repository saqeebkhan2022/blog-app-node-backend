const  router = require("express").Router();
const categoryController = require('../controller/category.controller')

router.route("/api/v1/category/getAll").get(categoryController.getAllCategory);
router.route("/api/v1/category/:categoryId").get(categoryController.getCategoryById);
router.route("/api/v1/category/create-category").post(categoryController.createCategory);
router.route("/api/v1/category/update-category/:categoryId").put(categoryController.updateCategory);
router.route("/api/v1/category/delete-category/:categoryId").delete(categoryController.deleteCategory);



module.exports = router;