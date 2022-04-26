const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  //email is the email of the user
  email: { type: String, unique: true, required: true, lowercase: true },
  //password is the password of the user
  password: { type: String, required: true },
  //favLists is the list of favLists of the user
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

module.exports = mongoose.model('User', userSchema);
