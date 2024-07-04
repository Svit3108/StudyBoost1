// models/FormData.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formDataSchema = new Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('FormData', formDataSchema);
