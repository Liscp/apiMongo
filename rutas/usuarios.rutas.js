;
'use strict'
const express = require("express");

let api = express.Router(),
    usuarioControl = require('../controles/usuarios.control')

//ENDPOINT de usuarios
api.get('/prueba', usuarioControl.prueba)
api.get('/get_usuarios', usuarioControl.getUsuarios)


api.get('/postman_query', usuarioControl.posmanQuery)
api.get('/postman_params/:nombre/:apellido/:edad', usuarioControl.posmanParams)
api.get('/postman_body', usuarioControl.posmanBody)

module.exports = api