const express=require("express");
const router=express.Router();



const{
    userHomeGet,
    profileGet,
    profilePost
}=require("../controllers/userController");

   router.get('/home',userHomeGet)
   router.get('/profile',profileGet)
   router.post("/profilepost",profilePost)






module.exports=router;