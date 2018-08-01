const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

//Creating a Model
module.exports = Item = mongoose.model('item', ItemSchema);