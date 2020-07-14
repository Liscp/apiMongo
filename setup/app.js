;
'use strict'

const express = require("express"),
      bodyParser = require("body-parser"),
      connectDb = require("../config/db"),
      passport = require('passport'),
      cors = require('cors'),
      parseurl = require('parseurl')

let app = express(),
    session = require('express-session'),
    usuarioRuta = require('../rutas/usuarios.rutas'),
    fileRuta = require('../rutas/files.rutas'),
    db = connectDb(),
    sess = {
        secret: 'hola',
        resave: false,
        saveUninitialized: true,
        name: 'sessionID',
        cookie: {
            httpOnly: false,
            maxAge: parseInt(process.env.TIEMPO)
        } 
    },
    corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

//Cors
app.use(cors(corsOptions))

//Session
app.use(session(sess))

//Passport
app.use(passport.initialize())
app.use(passport.session())

//ejemplo de sesion para verificar
app.use(function (req, res, next) {
    if (!req.session.views) {
      req.session.views = {}
    }
   
    // get the url pathname
    var pathname = parseurl(req).pathname
   
    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
   
    next()
  })
   
  app.get('/foo', function (req, res, next) {
    res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
  })

  app.get('/prueba1', function (req, res, next) {
    res.send('you viewed this page ' + req.session.views['/prueba1'] + ' times' + req.sessionID)
  })

app.use('/api', usuarioRuta)
app.use('/api', fileRuta)

module.exports = app