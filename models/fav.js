const mongoose = require('mongoose');

const favSchema = new mongoose.Schema({
  ownerId: {
    // ownerId is the userId of the user who created the fav
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String, // title of the fav
  description: String, // description of the fav
  URL: String, // URL of the fav
});

module.exports = mongoose.model('Fav', favSchema);
