const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  imgpath:{
    type:String,
    required:true
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
