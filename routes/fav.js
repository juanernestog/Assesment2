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
// Create one fav
// Delete one fav

module.exports = router;
