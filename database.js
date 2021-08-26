// var MongoClient = require('mongodb').MongoClient;
// var express = require('express');
// var app = express();

// var url = 'mongodb://localhost/data';
// MongoClient.connect(url, {useNewUrlParser:true});
// app.get('/static', function(req, res) {
//     db.collection('users').find({}).toArray(function(err, docs) {
//     res.send(docs);
//     });
//   })

window.addEventListener('DOMContentLoaded', init);

var static;
var performance;
function init(){
    postPerformance;
    postStatic;

}
function postPerformance(){

    const url = 'https://cse135proj.site/json/performance';
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        document.getElementById('grid2').data = response;
    });
  }

function postStatic() {
    const url = 'https://cse135proj.site/json/static';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function(response){
        document.getElementById('grid1').data = response;
    });
      
  }