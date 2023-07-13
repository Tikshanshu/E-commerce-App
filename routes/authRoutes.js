import express from "express";
import {registerController,loginController,testController} from "../controllers/authController.js"
import { requireSignIn,isAdmin } from "../middlewares/authMiddleware.js";
//router object because routing is done in seprate file
const router= express.Router()

//routing

router.post("/register", registerController);

router.post("/login",loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;