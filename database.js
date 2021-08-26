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
    fetch(url).then(response => {
            response.json().then(data => {
                console.log(data);
            }).catch(error => {
                console.log(error.message);
            })    
      });
  }

function postStatic() {
    const url = 'https://cse135proj.site/json/static';
    fetch(url).then(response => {
        response.json().then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error.message);
        })    
  });
      
  }