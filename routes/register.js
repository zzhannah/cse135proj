const User = require('../models/model')
const express = require('express')
const router = express.Router()

router.get('/', async(req,res) => {
    res.render('register.ejs')
})


router.post('/', async(req,res) => {
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password: req.body.password,
        role : req.body.role
    })
 
    try{
        const a1 =  await user.save() 
        res.redirect('/login')
    }catch(err){
        res.redirect('/register')
    }
})
module.exports = router