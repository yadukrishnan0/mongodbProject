const signupModel=require("../models/signupdatas.js")
const checkPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

module.exports={
    loginGet:(req,res)=>{
        res.render("login")
    },
    signupGet:(req,res)=>{
        res.render("signup")
    },
    SignupPost:(req,res)=>{
        const{email,password,confirmpassword}=req.body
    //    if()
        signupModel.create({email,password})
        
        
    }

}
