const express = require('express');
const router = express.Router();
const User = require('../models/user');

// TO DO: add routes
// Get all fav
router.get('/', async (req, res) => {
  // on route  /api/fav/  send back all favs
  try {
    const favs = await User.find({ favLists: { $exists: true } });
    res.json(favs);
    //res.json();
  } catch (error) {
    res.json({ message: error.message });
    // res.status(500).json({ message: error.message });
  }
});
// Get one fav
router.get('/:id', getFav, (req, res) => {
  // on route  /api/fav/:id  send back one fav
  res.json(res.fav);
});
// Create one fav
router.post('/', async (req, res) => {
  const fav = new Fav([
    {
      title: req.body.favs.title,
      description: req.body.favs.description,
      URL: req.body.favs.URL,
    },
  ]);
  const favList = new FavList({
    favLists: [
      {
        // name of the favList
        name: req.body.name,
        // list of favs
        favs: fav,
      },
    ],
  });
  try {
    const newFavList = await favList.save();
    res.status(201).json(newFavLsit); // success created new fav
  } catch (error) {
    res.status(400).json({ message: error.message }); // bad request
  }
});
// Delete one fav
router.delete('/:id', (req, res) => {
  // delete one fav by id
  Fav.remove({ _id: req.params.id }, (err, fav) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: 'Successfully deleted',
    });
  });
});

//middleware

async function getFav(req, res, next) {
  // get one fav by id
  let fav;
  try {
    fav = await Fav.findById(req.params.id);
    if (fav) {
      res.json(fav);
    } else {
      return res.status(404).json({ message: 'Fav not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.fav = fav;
  next();
}

module.exports = router;
