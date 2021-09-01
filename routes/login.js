const User = require('../models/model')
const express = require('express')
const router = express.Router()
const passport = require('passport')
// require('./passport-config')(passport);


router.get('/', async(req,res) => {
    res.render('login.ejs')
})


router.post('/', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: 'http://reporting.cse135proj.site',
      failureRedirect: '/api/login',
      failureFlash: true
    })(req, res, next);
  });
  

module.exports = router