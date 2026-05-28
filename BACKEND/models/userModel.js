const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    phoneNo: {
      type: Number,
      required: true,
    },

    licenceNo: {
      type: String,
      required: true,
    },

    licenceImg: {
      type: String,
      required: true,
    },

    // ADMIN ROLE
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },

  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userModel);

module.exports = user;