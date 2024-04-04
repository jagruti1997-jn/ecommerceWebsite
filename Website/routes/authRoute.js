import express from "express";
import {registerController,loginController,testController, updateProfileController} from '../controlllers/authController.js'
import { requireSignIn,isAdmin } from "../middleware/authMiddleware.js";


const router=express.Router()

//method post

router.post('/register',registerController)

//LOGIN || POST
router.post('/login',loginController)


//test routes
router.get('/test',requireSignIn,isAdmin,testController)

//protected user route auth
router.get('/user-auth',requireSignIn, (req,res)=>{
    res.status(200).send({ok:true});
})

//protected admin route auth
router.get('/admin-auth',requireSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ok:true});
})


//update profile
router.put("/profile", requireSignIn, updateProfileController);

export default router;