const express=require("express");
const router=express.Router()
const{
    signupGet,
    SignupPost,
    loginGet,
    loginPost
}=require("../controllers/mainController")

router.get("/login",loginGet)
router.get("/signup",signupGet)
router.post("/",SignupPost)
router.post("/loginpost",loginPost)
module.exports=router