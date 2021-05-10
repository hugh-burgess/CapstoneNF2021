const mongoose = require("mongoose");

const { Schema } = mongoose;

const UsersSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Users", UsersSchema);
