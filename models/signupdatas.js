const mongoose =require('mongoose')

const signupSchema = mongoose.Schema({
   name:{
     type:String,
     required:true
   },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
       type:Boolean,
       required:true,
       default:false
    }
})

const signupModel = mongoose.model('signupDatas',signupSchema)
module.exports = signupModel