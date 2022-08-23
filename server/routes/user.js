const express = require("express");

//controller functions
const { signupUser,loginUser} = require("../controllers/userController")
 
const router = express.Router();

//Login route
router.post("/login",loginUser)


//Singup route
router.post("/singup",signupUser)

module.exports = router;
