;
'use strict'
const express = require("express");

let api = express.Router(),
    usuarioControl = require('../controles/usuarios.control'),
    passwordControl = require('../controles/password'),
    autenticaControl = require('../controles/autentifica')

//ENDPOINT de usuarios
api.get('/prueba', usuarioControl.prueba)
api.get('/get_usuarios', autenticaControl.autentica, usuarioControl.getUsuarios)
api.post('/login', usuarioControl.loginUsuario)
api.post('/nuevo_usuario', [passwordControl.codificarPassword], usuarioControl.nuevoUsuario)



module.exports = api

//investigar soquet.emit