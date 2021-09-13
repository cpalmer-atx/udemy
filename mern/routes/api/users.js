const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', [
  check('name', 'Name is Required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], 
(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // See if user exists

  // Get users gravatar

  // Encrypt password with bcrypt

  // Return jsonwebtoken
  
  console.log(req.body);
  res.send('User Route');
});

module.exports = router;