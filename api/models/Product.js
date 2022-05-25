const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  // Product information
  productName: { type: String, required: true, index: { unique: true } },
  artist: { type: String, required: true },
  price: {type: Number, required: true},
  offerPrice: {type: Number}, 
  purchases: { type: Number, required: true, default: 0 },
  // Category information
  isClothing: {type: Boolean, required: true},
  category: {type: String, required: true, enum: ['sweat','tshirt','acc']},
  sizes:{type: Array, required: true},
  // Type information
  isOffer: { type: Boolean, required: true, default: false },
  isFeat:  { type: Boolean, required: true, default: false },
  // Image and designs
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  img3: { type: String },
  img4: {type: String},
  design1: { type: String, required: true },
  design2: { type: String },
  // date for filtering
  date: { type: Date, required: true, default: Date.now() },
});
module.exports = mongoose.model('Product', Product)

