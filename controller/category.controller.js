const CategoryModel = require('../model/category')


// get all category
const getAllCategory = async (req,res) => {
    try{
        const category = await CategoryModel.find();
        res.json(category);
    }catch(err){
        res.json(err);
    }
}

// create category
const createCategory = async (req,res) => {
    try {
        const { name } = req.body;
        const newcategory = new CategoryModel({ name });
        const savedcategory = await newcategory.save();
        res.json(savedcategory);
    } catch (err) {
        res.json(err);
    }
}

// get category by id

const getCategoryById = async (req,res) =>{
    const categoryId = req.params.categoryId;
    try{
       const category = await CategoryModel.findById(categoryId);
       res.json(category);
    }catch(err){
        res.json(err);
    }
}

// update category
const updateCategory = async (req,res) =>{
    const categoryId = req.params.categoryId;
    try{
     const category = await CategoryModel.updateOne({ "_id":categoryId},req.body);
     res.json(category);
    }catch(err){
        res.json(err)
    }
}

// delete category
const deleteCategory = async (req,res) =>{
    const categoryId = req.params.categoryId;
    try{
     const category = await CategoryModel.findByIdAndDelete(categoryId);
     res.json(category);
    }catch(err){
        res.json(err)
    }
}

module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}