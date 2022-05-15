const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Product = new Schema({
  productName: { type: String, required: true, index: { unique: true } },
  artist: { type: String, required: true },
  description: { type: String, required: true },
//   Commented because testing with Sirv CDN
//   img1: {
//     data: Buffer,
//     contentType: String,
//     required: true,
//   },
//   img2: {
//     data: Buffer,
//     contentType: String,
//   },
//   design1: {
//     data: Buffer,
//     contentType: String,
//     required: true,
//   },
//   design2: {
//     data: Buffer,
//     contentType: String,
//   },
img1: { type: String, required: true },
design1: { type: String, required: true },
img2: { type: String },
design2: { type: String },
})
module.exports = mongoose.model('Product', Product)
