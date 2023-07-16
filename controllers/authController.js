 import userModel from "../models/userModel.js";
 import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
 import JWT from "jsonwebtoken";


 export const registerController=async(req,res)=>{
    try {
        
        const { name, email, password, phone, address,answer } = req.body;
        
    //validations
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if(!answer){
      return res.send({ message: "Answer is Required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user
    });
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'error in Registration',
            error
        })
    }
 };

 export const loginController=async(req,res)=>{
       try {
           const{email,password}=req.body;
           if(!email||!password)
           {
            return res.status(404).send({
                success:false,
                message:"Invalid User or Password"
            })
           }
           const user= await userModel.findOne({ email });
           if(!user){
            return res.status(404).send({
                success:false,
                message:"Email not registered"
            })
           }
           const match=await comparePassword(password,user.password);
           if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid password"
            })
           }

           //token
          const token =await JWT.sign({_id:user._id},process.env.JWT_SECRETS,{expiresIn:"100d"});

          res.status(200).send({
            success:true,
            message:"login successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role
            },token
          });


       } catch (error) {
        res.status(500).send({
            success:false,
            message:'error in login',
            error
        })
       }
 };


 //testing of middleware by test controller

export const testController= async(req,res)=>{
    try {
        res.send("protected route access given")
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
}

export const forgotPasswordController=async (req,res)=>{
  try {
    
    const{email,answer,newPassword}=req.body;
    if(!email){
      res.status(400).send({message:"email is required"})
    }
    if(!answer){
      res.status(400).send({message:"answer is required"})
    }
    if(!newPassword){
      res.status(400).send({message:"newPassword is required"})
    }
    //check
    const user=await userModel.findOne({email,answer});
    if(!user){
      return res.status(404).sen({
        success:false,
        message:"Wrong email or answer"
      })
    }else{
      const hashed=await hashPassword(newPassword);
      await userModel.findByIdAndUpdate(user._id,{password:hashed});
      res.status(200).send({
        success:true,
        message:"Password Reset successfully"
      })
    }
  } catch (error) {
  
    console.log(error);
    res.status(500).send({
      success:false,
      message:'something wen wrong',
      error
    })
  }
}
