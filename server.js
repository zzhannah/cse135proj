// app.js file
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

//................................................................//
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
var express = require('express');
const mongoose = require('mongoose');
// const initializePassport = require('./passport-config.js')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
//const bcrypt = require('bcrypt');
// const { ROLE, users } = require('./data')
const { authRole } = require('./basicAuth')
const path = require('path');
require('./passport-config')(passport);
// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id),
//   name => users.find(user => user.name === name)
// )
const app = express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.json());

//mongoose connection
const url = 'mongodb+srv://root:hoT.9708t@cluster0.ctfa5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection;
con.on('open', () => {
    console.log('connected...')
})

//authentication
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))


app.get('/', checkAuthenticated ,(req, res)=>{
  res.render('index1.ejs', {name: JSON.stringify(req.user)});
});


const login = require('./routes/login')
app.use('/login', checkNotAuthenticated, login)


const register = require('./routes/register')
app.use('/register', checkNotAuthenticated, register)

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/api/login')
})


function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/api/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/api')
  }
  next()
}








//CRUD
app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({ extended : true}))
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
//app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/admin', checkAuthenticated, authRole('admin'), require('./routes/routers'))




const controller = require('./controller/controller');

app.post('/api/users', controller.create);
app.get('/api/users', controller.find);
app.put('/api/users/:id', controller.update);
app.delete('/api/users/:id', controller.delete);


//DATABASE
const staticRouter = require('./routes/statics')
app.use('/static', staticRouter)

const performanceRouter = require('./routes/performances')
app.use('/performance',performanceRouter)

const activityRouter = require('./routes/activities')
app.use('/activity',activityRouter)


app.listen(3000);
