const mongoose = require('mongoose');

const favListSchema = new mongoose.Schema({
  ownerId: {
    // ownerId is the userId of the user who created the favList
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: String, // name of the favList
  list: [
    // list of favs
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Fav',
    },
  ],
});

module.exports = mongoose.model('FavList', favListSchema);
