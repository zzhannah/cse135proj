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
    postPerformance();
    postStatic();
    postActivity();

}
function postPerformance(){

    const url = 'https://cse135proj.site/api/performance';
    fetch(url).then(response => {
            response.json().then(data => {
                console.log(data);
                document.getElementById('grid2').data = data;
            }).catch(error => {
                console.log(error.message);
            })    
      });
}

function postStatic() {
    const url = 'https://cse135proj.site/api/static';
    fetch(url).then(response => {
        response.json().then(data => {
            console.log(data);
            document.getElementById('grid1').data = data;
        }).catch(error => {
            console.log(error.message);
        })    
  });
      
}

function postActivity() {
    const url = 'https://cse135proj.site/api/activity';
    fetch(url).then(response => {
        response.json().then(data => {
            console.log(data);
            document.getElementById('grid3').data = data;
        }).catch(error => {
            console.log(error.message);
        })    
  });
      
}