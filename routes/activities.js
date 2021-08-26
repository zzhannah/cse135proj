const Activity = require('../models/activity')
const express = require('express')
const router = express.Router()

router.get('/', async(req,res) => {
    try{
        const activity = await Activity.find()
        res.json(activity)
    }catch(err){
        res.json('Error ' + err)
    }
})

router.get('/:id', async(req, res) => { 
    try{
        const activity = await Activity.findById(req.params.id)
        res.json(activity)
    }catch(err){
        res.json('Error ' + err)
 }
})

router.post('/', async(req,res) => {
    const activity = new Activity({
        id : req.body.id,
        mousePosition: req.body.mousePosition,
        mouseClicks: req.body.mouseClicks,
        keydown: req.body.keydown,
        keyup : req.body.keyup
    })

    try{
        const a1 =  await activity.save() 
        res.json(a1)
    }catch(err){
        res.json('Error')
    }
})

router.delete('/:id',async(req,res)=> {
    try{
        const activity = await Activity.findById(req.params.id) 
        const a1 = await activity.delete()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }
})

module.exports = router