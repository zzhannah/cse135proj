// app.js file

var jsonServer = require('json-server');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Add custom routes
// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })
server.use(jsonServer.rewriter({"/api/*": "/$1"}));

// Returns an Express router
var router = jsonServer.router('db.json');

server.use(router);

server.listen(3000);
