const express = require('express');
const router = express.Router();

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
  Fav.create(req.body, (err, fav) => {
    if (err) {
      res.send(err);
    }
    res.json(fav);
  });
});
// Delete one fav

module.exports = router;
