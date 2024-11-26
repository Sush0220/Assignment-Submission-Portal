const mongoose = require("mongoose");
const _ = require("lodash");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["Admin", "User"],
    required: true,
    default: "User",
  },
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObj = user.toObject();

  return _.omit(userObj, "password");
};

module.exports = mongoose.model("User", userSchema);
