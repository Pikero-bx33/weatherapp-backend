const express = require('express');
const router = express.Router();

const User = require('../models/users')
const { checkBody } = require('../modules/checkBody')

// POST SIGN UP
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body

  if (!checkBody(req.body, ['email', 'password'])) {
    return res.json({ result: false, error: 'Missing or empty fields' })
  }

  /* if (!email || !password || email.trim() === '' || password.trim() === '') {
    return res.json({ result: false, error: 'Missing or empty fields' });
  } */

  User.findOne({ email: email })
    .then(existingUser => {
      if (existingUser) return res.json({ result: false, error: 'User already exists' })

      const newUser = new User(
        { name, email, password }
      )
      return newUser.save()
        .then(userSaved => {
          res.json({ result: true, message: 'new user saved', data: userSaved })
        })
    })
    .catch(err => res.json({ result: false, error: err.message }))
})

// POST SIGN IN
router.post('/signin', (req, res) => {

  const { email, password } = req.body

  if (!checkBody(req.body, ['email', 'password'])) {
    return res.json({ result: false, error: 'Missing or empty fields' })
  }

  /* if (!email || !password || email.trim() === '' || password.trim() === '') {
    return res.json({ result: false, error: 'Missing or empty fields' });
  } */

  User.findOne({ email: email })
    .then(existingUser => {
      if (!existingUser) {
        res.json({ result: false, error: 'User not found' })
      } else {
        res.json({ result: true, message: 'User connected' })
      }
    })
    .catch(err => res.json({ result: false, error: err.message }))
})

module.exports = router;