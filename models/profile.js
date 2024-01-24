const mongoose =require('mongoose')

const profileSchema = mongoose.Schema({
   age:{
     type:String,
     required:true
   },
    phone:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
      type:String,
       required:true,
       
    },
    objId:{
      type:mongoose.Types.ObjectId
    }
})

const profileModel = mongoose.model('profile',profileSchema)
module.exports = profileModel;