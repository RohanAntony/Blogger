var mongoose = require('mongoose');
var blogSchema = new mongoose.Schema({
  title:String,
  content:String,
  date:Date
});

module.exports = mongoose.model('Blog',blogSchema);
