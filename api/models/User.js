const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
  userNme: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  points: {type: Number, required: true, default: 0}
});
module.exports = mongoose.model('User', User)