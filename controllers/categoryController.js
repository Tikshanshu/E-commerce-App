import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

export const createCategoryController=async (req,res)=>{
   try {
       const{name}=req.body;
       if(!name){
        return res.status(401).send({message:"Category Name Required"})
       }
       const existingCategory=await categoryModel.findOne({name});
       if(existingCategory){
        return res.status(200).send({
            success:true,
            message:"category already exist"
        })
       }
       const category= await new categoryModel({name,slug:slugify(name)}).save();
       res.status(201).send({
        success:true,
        message:"new category created",
        category
       })
   } catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:"Error in category",
        error
    })
   }
}
export const updateCategoryController=async(req,res)=>{
    try {
        const{name}=req.body;
        const {id}=req.params;
        const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:"category updated",
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error while updating",
            error
        })
    }

}
export const categorycontroller=async(req,res)=>{
    try {
        const category =await categoryModel.find({});
          res.status(200).send({
            success:true,
            message:"All categories list",
            category,
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error while fetching categories",
            error
        });
    }
}

export const singleCategory=async(req,res)=>{
    try {
        
        
        const category=await categoryModel.findOne({slug:req.params.slug});
        res.status(200).send({
            success:true,
            message:"category list",
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error while fecting category"
        })
    }
}

export const deleteCategory=async(req,res)=>{
    try {
        const{id}=req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success:true,
            message:"succesfully deleted"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error while deleting",
            error
        })
    }
}