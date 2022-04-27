const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// TO DO: add bcrypted password
router.post('/', login, (req, res) => {
  // on route /auth/local/login
  //res.send('login');
  const token = jwt.sign(
    {
      email: req.params.email,
      password: req.params.password,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  );
  res.json({
    token,
  });
});

// middleware
async function createUser(req, res, next) {
  const { email, password } = req.body;
  // create user
  if (!email || !password) {
    throw new Error('Email and password are required');
  } else if (await User.findOne({ email: email })) {
    throw new Error('Email already exists');
  } else if (!validateEmail(email)) {
    throw new Error('Email is not valid. Please use a valid email address.');
  } else if (!validatePassword(password)) {
    throw new Error(
      'Password must be at least 8 characters long, have a lowercase letter, an uppercase letter, a number, and a special character',
    );
  } else {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ email: email, password: hashPassword });
    await user.save();
    console.log(`User ${email} created`);
    next();
  }
}

async function login(req, res, next) {
  const { email, password } = req.body;
  //log in / register if first time
  const lowerCaseEmail = email.toLowerCase();
  if (!lowerCaseEmail || !password) {
    throw new Error('Email and password are required');
  } else {
    const user = await User.findOne({ lowerCaseEmail }); // find user by email
    if (!user) {
      // if user does not exist create user
      await createUser(lowerCaseEmail, password);
      const user = await User.findOne({ lowerCaseEmail });
      return login(user.email, password); // create the user and log them in with recursion
    } else {
      // if user exists check password
      const isValid = await bcrypt.compare(password, user.password); // compare password to hash
      if (!isValid && user.password !== 'Pass!123') {
        //Testing user has no hashed password yet
        // if password is not valid throw error
        throw new Error(`Password is incorrect`);
      } else {
        // if password is valid return user
        console.log(`User ${lowerCaseEmail} logged in`);
        next();
      }
    }
  }
}

function validateEmail(email = '') {
  // validate email address
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}
function validatePassword(password = '') {
  // validate password requirements (8 characters, lowercase, uppercase, number, special character)
  const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  return re.test(password);
}

module.exports = router;
