const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
}, {timestamps: true})

module.exports = mongoose.model('Users', UsersSchema)