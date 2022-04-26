const mongoose = require('mongoose');

const favSchema = new mongoose.Schema({
  // favId is the id of the fav
  title: String, // title of the fav
  description: String, // description of the fav
  URL: String, // URL of the fav
});

module.exports = mongoose.model('Fav', favSchema);
