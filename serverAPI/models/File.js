var mongoose = require('mongoose');
var fileSchema = new mongoose.Schema({
  filename:String,
  renamed:String,
  extension:String,
  path:String
});

module.exports = mongoose.model('File',fileSchema);
