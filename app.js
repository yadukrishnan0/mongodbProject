const express=require("express");
const app=express();
app.use(express.urlencoded({extended:true}))
const userRouter=require("./router/userRouter")
const mongoose=require("mongoose")

app.set("view engine","ejs")
app.set("views","views")

app.use(express.static("public"));
app.use("/",userRouter)

mongoose.connect("mongodb://localhost:27017/eBuy")
.then(()=>console.log("data base connected"))
.catch((err)=>console.log("error data base connection error"))

app.listen(8086,()=>{
   console.log(8086,"server successfully")
})