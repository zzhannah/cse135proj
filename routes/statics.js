const Static = require('../models/static')
const express = require('express')
const server = express.Router()

server.get('/static', async(req,res) => {
    try{
        const static = await Static.find()
        console.log(static)
    }catch(err){
        console.log('Error ' + err)
    }
})

server.get('/static/:id', async(req, res) => { 
    try{
        const static = await Static.findById(req.params.id)
        console.log(static)
    }catch(err){
        console.log('Error ' + err)
 }
})


server.post('/static', async(req,res) => {
    const static = new Static({
        id : req.body.id,
        userAgent: req.body.userAgent,
        language: req.body.language,
        acceptsCookies: req.body.acceptsCookies,
        innerWidth : req.body.innerWidth,
        innerHeight : req.body.innerHeight
    })

    try{
        const a1 =  await static.save() 
        console.log(a1)
    }catch(err){
        console.log('Error')
    }
})
module.exports = server