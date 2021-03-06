const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const keys = require('../../config/key');
const jwt = require('jsonwebtoken');

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require('../../validation/login');

const User = require('../../models/User');

/**
 * @route GET /api/auth/test
 * @description Test auth route
 * @access Public
 */
router.get('/test', (req, res) => res.json({'msg': 'Auth works'}));

/**
 * @route Post /api/auth/register
 * @description Register user | returning user object or error
 * @access Public
 */
router.post('/register', (req, res) => {

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then( user => {
      if(user) {
        return res.status(400).json({ email: 'User already exists.' });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200', // Size
          r: 'pg', // Rating
          d: 'mm' // Default
        });

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw error;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });

      }
    });
});

/**
 * @route Post /api/auth/login
 * @description Login user | returning JWT Token
 * @access Public
 */
router.post('/login', (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  // console.log(password);
  // Find user by email
  User.findOne({ email })
    .then(user => {
      // Check for user
      if (!user) {
        return res.status(404).json({ email: 'User not found.' });
      }

      // Check for password
      bcrypt.compare(password, user.password).then(isMatch => {
        console.log(isMatch);
        if (isMatch) {
          // User matched
          
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
          };

          // Sign token
          jwt.sign(
            payload,
            keys.secretKey,
            {expiresIn: 3600},
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token,
              });  
            }
          );

        } else {
          return res.status(400).json({ password: 'Password incorrect'});
        }
      });
    });
});

module.exports = router;