const signupModel = require("../models/signupdatas.js");
const checkPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;
const bcrypt = require("bcrypt");

module.exports = {
  loginGet: (req, res) => {
    res.status(404).render("login", { error: "" });
  },
  loginPost: async (req, res) => {
    const { email, password } = req.body;
    const accExist = await signupModel.findOne({ email });

    if (!accExist) {
      res.render("login", { error: "create acccount" });
    } else {
      const passmatch = await bcrypt.compare(password, accExist.password);
      if (passmatch) {
        req.session.email = accExist.email;
        if (accExist.admin) {
          res.redirect("/admin/home");
        } else {
          res.redirect("/user/home");
        }
      } else {
        res.render("login", { error: "password is in correct" });
      }
    }
  },
  signupGet: (req, res) => {
    res.render("signup", { error: req.flash("error") });
  },
  SignupPost: async (req, res) => {
    try {
      const { name, email, password, confirmpassword } = req.body;
      const accExist = await signupModel.findOne({ email });
      const passValidation = checkPass.test(password);
      const conValidation = confirmpassword === password;

      if (accExist) {
        req.flash("error", "account is already exist");
        return res.redirect("/signup");
      }

      if (!passValidation) {
        req.flash("error", "password format incorrect");
        return res.redirect("/signup");
      }

      if (!conValidation) {
        req.flash("error", "password is not match");
        return res.redirect("/signup");
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new signupModel({
        name,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      res.redirect("/login");
    } catch (err) {
      console.error(err, "signup post error");
      res.status(500).send("Internal Server Error");
    }
  },
  logoutGet: (req, res) => {
    try {
      req.session.destroy();
      res.redirect("/login");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },
};
