const express=require("express");
const router=express.Router();
const multer = require('multer')
const storage = require('../middleware/multer')

const{
    adminHomeGEt,
    AddProductGet,
    AddProductPost,
    deleteDoc,
    editGet,
    editPost
}=require("../controllers/adminController");

const upload = multer({ storage })  

router.get("/home",adminHomeGEt);
router.get("/addproducts",AddProductGet)
router.post("/addproducts",upload.single('imgpath'),AddProductPost)
router.get("/:id",editGet)
router.post("/:id",editPost)
router.get("/delete/:id",deleteDoc)
module.exports=router;