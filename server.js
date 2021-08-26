// app.js file

var jsonServer = require('json-server');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/data';
// Returns an Express server
var server = jsonServer.create();
const Alien = require('../models/alien')
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...')
})
// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Add custom routes
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
server.use(jsonServer.rewriter({"/api/*": "/$1"}));

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

// Returns an Express router
//var router = jsonServer.router('db.json');

//server.use(router);

server.listen(3000);
