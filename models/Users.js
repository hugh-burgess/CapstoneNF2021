const mongoose = require("mongoose");

const { Schema } = mongoose;

const UsersSchema = new Schema(
  {
    username: String,
    password: String,
    picture: String,
    bio: String,
    name: String,
    info: Object,
    imageType: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Users", UsersSchema);
