const productModel = require("../models/product.js");
const mongoose = require("mongoose");

module.exports = {
  adminHomeGEt: async (req, res) => {
    const productDetails = await productModel.find({});
    if (!req.session.email) {
      res.redirect("/login");
    } else {
      res.render("admin/adminHome", { productDetails });
    }
  },
  AddProductGet: (req, res) => {
    if (!req.session.email) {
      res.redirect("/login");
    } else {
      res.render("admin/addproducts", { data: {} });
    }
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
    if (!req.session.email) {
      res.redirect("/login");
    } else {
      try {
        const docs = await productModel.findOne({ _id: req.params.id });

        res.render("admin/edit", { data: docs });
      } catch (err) {
        console.log("Error: Unable to retrieve and edit");
        next(err);
      }
    }
  },
  editPost: async (req, res) => {
    const { name, price, size, discription } = req.body;
    const image = req.file.filename;
    const producid = req.params.id;
    await productModel.updateOne(
      { _id: producid },
      {
        $set: {
          imgpath: image,
          name: name,
          price: price,
          size: size,
          discription: discription,
        },
      }
    );
    res.redirect("/admin/home");
  },
  deleteDoc: async (req, res) => {
    const productid = req.params.id;
    await productModel.deleteOne({ _id: productid });
    res.redirect("/admin/home");
  },
};
