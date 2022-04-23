const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: true },
  favs: [
    // favs is an array of favIds
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Fav',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
