const express=require("express");
const app=express();

const flash=require("connect-flash")
const mongoose=require("mongoose")
const session=require("express-session")
const mainrouter=require("./router/mainrouter")
const AdminRouter=require("./router/AdminRouter")
const UserRouter=require("./router/userRouter")


app.set("view engine","ejs")
app.set("views","views")

app.use(
   session({
     secret: "secret",
     resave: true,
     saveUninitialized: true,
    })
    );
    app.use(flash())
    app.use(express.static("public"));
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())


app.use("/",mainrouter)
app.use("/admin",AdminRouter)
app.use("/user",UserRouter)



mongoose.connect("mongodb://localhost:27017/eBuy")
.then(()=>console.log("data base connected"))
.catch((err)=>console.log("error data base connection error"))




app.listen(8086,()=>{
   console.log(8086,"server successfully")
})