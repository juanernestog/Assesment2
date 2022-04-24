const mongoose = require('mongoose');

const favSchema = new mongoose.Schema({
  // favId is the id of the fav
  favId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fav',
  },
  // not sure if this is needed
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
