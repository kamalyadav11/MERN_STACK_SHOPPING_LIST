const mongoose = require('mongoose');
const Schema = mongoose.schema;

//Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

//Creating a Model
module.exports = Item = mongoose.model('item', ItemSchema);