const productModel = require('../models/product.js')
module.exports={
    userHomeGet: async(req,res)=>{
        const productDetails =await productModel.find({})
         res.render("user/userHome",{productDetails})
    },
    profileGet:(req,res)=>{
      res.render("user/profile")
    },
    
}