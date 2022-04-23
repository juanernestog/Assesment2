require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// TO DO: add auth
router.get('/auth/local/login', (req, res) => {
  // on route /auth/local/login
  const token = jwt.sign(
    {
      email: req.params.email,
      password: req.params.password,
    },
    'secret',
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  );
  res.json({
    token,
  });
});

module.exports = router;
