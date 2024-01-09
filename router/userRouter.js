const express=require("express");
const router=express.Router();



const{
    userHomeGet,
    profileGet
}=require("../controllers/userController");

   router.get('/home',userHomeGet)
   router.get('/profile',profileGet)






module.exports=router;