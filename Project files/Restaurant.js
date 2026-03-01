const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisineType: [String],
  rating: { type: Number, default: 0 },
  isPromoted: { type: Boolean, default: false },
  menu: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
