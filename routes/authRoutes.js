import express from "express";
import {registerController} from "../controllers/authController.js"

//router object because routing is done in seprate file
const router= express.Router()

//routing
//Register||METHOD POST
router.post("/register", registerController);

export default router;