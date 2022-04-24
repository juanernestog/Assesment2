const express = require('express');
const router = express.Router();
const Fav = require('../models/fav');

// TO DO: add routes
// Get all fav
router.get('/', async (req, res) => {
  // on route  /api/fav/  send back all favs
  res.send('get all favs'); // testing route
  try {
    const favs = await Fav.find();
    res.json(favs);
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
  const fav = new Fav({
    ownerID: req.body.ownerId,
    title: req.body.title,
    description: req.body.description,
    URL: req.body.URL,
  });
  try {
    const newFav = await fav.save();
    res.status(201).json(newFav); // success created new fav
  } catch (error) {
    res.status(400).json({ message: error.message }); // bad request
  }
});
// Delete one fav
router.delete('/:id', (req, res) => {
  res.send('delete a fav');
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
