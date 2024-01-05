const express=require("express");
const router=express.Router()
const{
    signupGet,
    SignupPost,
    loginGet,
    
}=require("../controllers/userController")

router.get("/login",loginGet)
router.get("/signup",signupGet)
router.post("/",SignupPost)
module.exports=router