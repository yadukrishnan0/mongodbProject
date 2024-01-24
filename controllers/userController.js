const { default: mongoose } = require("mongoose");
const productModel = require("../models/product.js");
const profileModel = require("../models/profile.js");
const signupModel = require("../models/signupdatas.js");
module.exports = {
  userHomeGet: async (req, res) => {
    if (!req.session.email) {
      res.redirect("/login");
    } else {
      const productDetails = await productModel.find({});
      res.render("user/userHome", { productDetails });
    }
  },
  profileGet: async (req, res) => {
    if (!req.session.email) {
      res.redirect("/login");
    } else {
      const email1 = req.session.email;
      const data = await signupModel.findOne({ email: email1 });
      const id =new mongoose.Types.ObjectId(data._id)
      const fulldata = await signupModel.aggregate([{$match:{
        _id:id}},{$lookup:{from:'profiles',localField:'_id',foreignField:'objId',as:'detais'}}])
        console.log(fulldata);

      res.render("user/profile", {fulldata});
    }
  },
  profilePost: async (req, res) => {
    const email = req.session.email;
    const data = await signupModel.findOne({ email: email });
console.log(req.body);
    const { city, age, phone, address } = req.body;
    const userId = new mongoose.Types.ObjectId(data._id);

    const userData = await profileModel.updateOne(
      { objId: userId },
      {
        $set: {
          city,
          age,
          phone,
          address,
        },
      },
      { upsert: true }
    );

    res.redirect("/user/userHome");
  },
};
