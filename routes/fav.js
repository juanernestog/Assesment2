const express = require('express');
const router = express.Router();

// TO DO: add routes
// Get all favs
router.get('/api/fav/', (req, res) => {
  Fav.find({}, (err, favs) => {
    if (err) {
      res.send(err);
    }
    res.json(favs);
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
// Delete one fav

module.exports = router;
