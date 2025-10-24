const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "Please add the name"],
  },
  phone: {
    type: String,
    required: [true, "Please Enter Phone Number"],
  },
});

module.exports = mongoose.model("Contact", contactSchema);
