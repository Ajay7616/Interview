const mongoose = require("mongoose");

const ratingtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  product: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  reviews: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

const Rating = mongoose.model("Rating", ratingtSchema);

module.exports = Rating;
