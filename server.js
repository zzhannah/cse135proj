// app.js file

var jsonServer = require('json-server');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/data';


// Returns an Express server
var server = jsonServer.create();


mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...')
})
// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

server.use(jsonServer.rewriter({"/api/*": "/$1"}));
// Add custom routes


// Returns an Express router
// var router = jsonServer.router('db.json');

// server.use(router);
const staticRouter = require('./routes/statics')
server.use('/static', staticRouter)

// const performanceRouter = require('./routes/performances')
// app.use('/static',performanceRouter)

// const alienRouter = require('./routes/statics')
// app.use('/static',alienRouter)


server.listen(3000);
