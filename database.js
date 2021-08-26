var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express();

var url = 'mongodb://localhost';
MongoClient.connect(url, {useNewUrlParser:true});

app.get('/data', function(req, res) {
    db.collection('static').find({}).toArray(function(err, docs) {
    res.send(docs);
    });
})

