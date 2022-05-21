const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  productName: { type: String, required: true, index: { unique: true } },
  artist: { type: String, required: true },
  description: { type: String, required: true },
  price: {type: Number, required: true},
  offerPrice: {type: Number},
  category: {type: String, required: true, enum: ['sweat','tshirt','acc']},
  purchases: { type: Number, required: true, default: 0 },
  isOffer: { type: Boolean, required: true, default: false },
  img1: { type: String, required: true },
  img2: { type: String },
  img3: { type: String },
  design1: { type: String, required: true },
  design2: { type: String },
  date: { type: Date, required: true, default: Date.now() },
});
module.exports = mongoose.model('Product', Product)

