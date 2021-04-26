const mongoose = require("mongoose");

const { Schema } = mongoose;

const ParkSchema = new Schema(
  {
    name: String,
    address: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Park", ParkSchema);
