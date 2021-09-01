const User = require('../models/model')
const express = require('express')
const router = express.Router()
const passport = require('passport')


router.get('/', async(req,res) => {
    res.render('views/login.ejs')
})


router.post('/', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/admin',
      failureRedirect: '/login',
      failureFlash: true
    })(req, res, next);
  });
  

module.exports = router