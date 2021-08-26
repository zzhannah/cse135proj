// app.js file

var express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/data';

const app = express()
// Returns an Express server


mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...')
})
// app.get('/api/*', (req, res, next) => {
//     req.url = '/';
//     next();
//   });
// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());


// Add custom routes

// Returns an Express router
// var router = jsonServer.router('db.json');
app.use(router);
app.use(express.json())

// // server.use(router);
// const staticRouter = require('./routes/statics')
// app.use('/api/static', staticRouter)

// const performanceRouter = require('./routes/performances')
// app.use('/api/performance',performanceRouter)

// const alienRouter = require('./routes/activities')
// app.use('/api/activity',alienRouter)


app.listen(3000);
