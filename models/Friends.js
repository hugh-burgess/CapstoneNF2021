const mongoose = require("mongoose");

const { Schema } = mongoose;

const FriendsSchema = new Schema(
  {
    id: String,
    name: String,
    imgSrc: String,
    bio: String,
    stats: Array,
    rating: Number,
    review: String,
    isStarred: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Friends", FriendsSchema);
