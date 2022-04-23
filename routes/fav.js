const express = require('express');
const router = express.Router();
const Fav = require('../models/fav');

// TO DO: add routes
// Get all fav
router.get('/api/fav/', (req, res) => {
  // on route  /api/fav/  send back all favs
  Fav.find({}, (err, fav) => {
    // find all favs
    if (err) {
      res.send(err);
    }
    res.json(fav);
  });
});
// Get one fav
router.get('/api/fav/:id', (req, res) => {
  Fav.findById(req.params.id, (err, fav) => {
    if (err) {
      res.send(err);
    }
    res.json(fav);
  });
});
// Create one fav
router.post('/api/fav/', (req, res) => {
  const fav = new Fav({
    ownerID: req.body.userID,
    title: req.body.title,
    description: req.body.description,
    URL: req.body.URL,
  });
  fav.save((err) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: 'Fav created',
    });
  });
});
// Delete one fav
router.delete('/api/fav/:id', (req, res) => {
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

module.exports = router;
