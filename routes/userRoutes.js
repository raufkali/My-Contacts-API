const express = require("express");
const user = require("../controllers/userController");
const router = express.Router();
const validateToken = require("../middleware/authtokenHandler");

router.post("/register", user.registerUser);

router.post("/login", user.loginUser);

router.get("/current", validateToken, user.currentUser);

module.exports = router;
