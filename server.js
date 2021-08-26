// app.js file

const { MongoClient } = require('mongodb');
const uri1 = "mongodb+srv://root:<password>@cluster0.ctfa5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri1, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


var express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb+srv://root:hoT.9708t@cluster0.ctfa5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
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
//app.use(jsonServer.defaults());


// Add custom routes

// Returns an Express router
// var router = jsonServer.router('db.json');
// app.use(router);

app.use(express.json())

const staticRouter = require('./routes/statics')
app.use('/static', staticRouter)

const performanceRouter = require('./routes/performances')
app.use('/performance',performanceRouter)

const activityRouter = require('./routes/activities')
app.use('/activity',activityRouter)


app.listen(3000);
