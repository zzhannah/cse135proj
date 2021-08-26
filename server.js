// app.js file

var jsonServer = require('json-server');
const mysql = require('mysql');
// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Add custom routes
server.get('/static/:id', function (req, res) { 
     const connection = mysql.createConnection({
         host:'localhost',
         user:'root',
         database:'cse135'
     })
     connection.query("SELECT * FROM static", (err, rows, fields) =>{
         res.json(rows);
     })
})
server.use(jsonServer.rewriter({"/api/*": "/$1"}));

// Returns an Express router
var router = jsonServer.router('db.json');

server.use(router);

server.listen(3000);
