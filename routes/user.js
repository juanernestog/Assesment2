require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// TO DO: add bcrypted password
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
