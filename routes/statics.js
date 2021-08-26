const Static = require('../models/static')
const express = require('express')
const router = express.Router()

router.get('/', async(req,res) => {
    try{
        const static = await Static.find()
        res.json(static)
    }catch(err){
        res.json('Error ' + err)
    }
})

router.get('/:id', async(req, res) => { 
    try{
        const static = await Static.findById(req.params.id)
        res.json(static)
    }catch(err){
        res.json('Error ' + err)
 }
})

router.post('/', async(req,res) => {
    const static = new Static({
        id:req.body._id,
        userAgent: req.body.userAgent,
        language: req.body.language,
        acceptsCookies: req.body.acceptsCookies,
        innerWidth : req.body.innerWidth,
        innerHeight : req.body.innerHeight
    })

    try{
        const a1 =  await static.save() 
        res.json(a1)
    }catch(err){
        res.json('Error')
    }
})

router.delete('/:id',async(req,res)=> {
    try{
        const static = await Static.findById(req.params.id) 
        const a1 = await static.delete()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }
})

module.exports = router