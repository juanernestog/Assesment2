const mongoose = require('mongoose');

const favListSchema = new mongoose.Schema({
  // favListId is the id of the favList
  favLists: [
    {
      // name of the favList
      name: String,
      // list of favs
      favs: [
        {
          title: String, // title of the fav
          description: String, // description of the fav
          URL: String, // URL of the fav
        },
      ],
    },
  ],
});

module.exports = mongoose.model('FavList', favListSchema);
