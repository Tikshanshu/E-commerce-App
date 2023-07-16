import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import  {categorycontroller, createCategoryController, deleteCategory, singleCategory, updateCategoryController}  from "../controllers/categoryController.js";
const router=express.Router();

//routes
router.post('/create-category',requireSignIn,isAdmin,createCategoryController);

router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController);

router.get('/get-category',categorycontroller);

router.get('/single-category/:slug',singleCategory);

router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategory);



export default router;