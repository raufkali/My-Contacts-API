const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter username"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: [true, "Email adress already exsists"],
  },
  password: {
    type: String,
    require: [true, "Please Enter password"],
  },
});
module.exports = mongoose.model("User", userSchema);
