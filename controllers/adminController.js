const productModel = require("../models/product.js");
const mongoose = require("mongoose");

module.exports = {
  adminHomeGEt: async (req, res) => {
    const productDetails = await productModel.find({});
    res.render("admin/adminHome", { productDetails });
  },
  AddProductGet: (req, res) => {
    res.render("admin/addproducts", { data: {} });
  },
  AddProductPost: async (req, res) => {
    // console.log('Reached');
    if (!req.file) {
      res.redirect("/admin/addproducts");
    }

    const imgpath = req.file.filename;
    const { name, price, size, discription } = req.body;
    const productdata = new productModel({
      name,
      price,
      size,
      discription,
      imgpath,
    });
    await productdata.save();
    res.redirect("/admin/home");
  },
  editGet: async (req, res, next) => {
    // console.log(req.params.id);

    try {
      const docs = await productModel.findOne({ _id: req.params.id });

      res.render("admin/edit", { data: docs });
    } catch (err) {
      console.log("Error: Unable to retrieve and edit");
      next(err);
    }
  },
  editPost:async (req,res)=>{

    console.log(req.params);
    const {name} = req.body
    console.log(name);
    console.log(req.body);
    // const docs = await productModel.updateOne({ _id: req.params.id },{$set:{}});
  },
  deleteDoc: async(req,res)=>{
   const  productid =req.params.id
   await productModel.deleteOne({_id:productid})
   res.redirect('/admin/home')
  }
};
