const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.js");

router.get("/", controller.getpost);


module.exports=router