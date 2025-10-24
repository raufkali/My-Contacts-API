const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

const sendError = (body, status, next) => {
  const err = new Error(body);
  err.message = body;
  err.status = status;
  next(err);
};
// register the user
registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    sendError("All Fields are mendatory", 400, next);
    return;
  }
  // checking if user is already exsisted
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    sendError("User allready registered", 400, next);
    return;
  }
  // creating user here
  // hashing the password
  const hashedPassword = await bcrypt.hash(password, 10);
  // creating the new user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log("[+] Successfully created a new user name: ", username);
  if (user) {
    res.status(200).json({
      _id: user.id,
      _email: user.email,
    });
  } else {
    sendError("User Creation Erro!", 400, next);
  }
});

// login the user
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    sendError("All Fields are mendatory", 400, next);
    return;
  }
  // checking the presence of user in database
  const user = await User.findOne({ email });
  // validating the password
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10m" }
    );
    res.status(200).json({ accessToken });
  } else {
    sendError("Email or Password is Inccorrect! ", 401, next);
  }
});

// current user info
const currentUser = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    sendError("req User not found", 401, next);
    return;
  }
  res.json(req.user);
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
