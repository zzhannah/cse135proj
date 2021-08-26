const Performance = require('../models/performance')
const express = require('express')
const router = express.Router()

router.get('/', async(req,res) => {
    try{
        const performance = await Performance.find()
        res.json(performance)
    }catch(err){
        res.json('Error ' + err)
    }
})

router.get('/:id', async(req, res) => { 
    try{
        const performance = await Performance.findById(req.params.id)
        res.json(performance)
    }catch(err){
        res.json('Error ' + err)
 }
})

router.post('/', async(req,res) => {
    const performance = new Performance({
        id : req.body.id,
        duration: req.body.duration,
        transferSize: req.body.transferSize,
        decodedBodySize: req.body.decodedBodySize,
        domContentLoadedEventStart : req.body.domContentLoadedEventStart,
        domContentLoadedEventEnd : req.body.domContentLoadedEventEnd
    })

    try{
        const a1 =  await performance.save() 
        res.json(a1)
    }catch(err){
        res.json('Error')
    }
})

router.put('/:id',async(req,res)=> {
    try{
        const performance = await Performance.findById(req.params.id)
        performance.duration = req.body.duration; 
        const a1 = await performance.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=> {
    try{
        const performance = await Performance.findById(req.params.id) 
        const a1 = await performance.delete()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }
})
module.exports = router