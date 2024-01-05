const mongoose =require('mongoose')

const signupSchema = mongoose.Schema({
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const signupModel = mongoose.model('signupDatas',signupSchema)
module.exports = signupModel