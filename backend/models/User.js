const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    google_id: {
      type: String,
      required: true,
    },

    name: {
      type: String,
    },

    credits: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
