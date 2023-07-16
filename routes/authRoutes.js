import express from "express";
import {registerController,loginController,testController,forgotPasswordController} from "../controllers/authController.js"
import { requireSignIn,isAdmin } from "../middlewares/authMiddleware.js";

//router object because routing is done in seprate file
const router= express.Router()

//routing

router.post("/register", registerController);

router.post("/login",loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);
//forgot password||POST
router.post("/forgot-password",forgotPasswordController);

//protected route auth
router.get("/user-auth",requireSignIn,(req,res)=>{
  
       res.status(200).send({ok:true});
}) ;

router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
  
       res.status(200).send({ok:true});
}) ;

export default router;