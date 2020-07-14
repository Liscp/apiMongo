; 
'use strict'

const connectDb = require('../config/db'),
      fs = require('fs'),
      bcrypt = require('bcrypt'),
      jwt = require('jsonwebtoken')

let prueba = (req, res) => {
    res.status(200).send('Hola API')
}

let getUsuarios = async(req, res) => {
    let db = await connectDb()
    db.collection('usuarios').find().toArray()
    .then(data => {
        res.status(200).json({
            transaccion: true,
            data: data,
            msg: "listo",
            token: req.token
        })
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: null,
            msg: err
        })
    })
}

let nuevoUsuario = async( req, res) => {
    let email = req.body.email
    let contasena = req.body.contrasena
    const data = { 'email': email, 'contrasena': contasena }
    let db = await connectDb()
    db.collection('usuarios').insertMany(data)
    .then( data => {
        res.status(200).json({
            data,
            msg: 'Usuario OK'
        })
    }).catch(err => {
        res.status(500).json({
            data,
            msg: 'No se pudo crear el usuario'
        })
    })
}


let loginUsuario = ( req, res) => {
    let email = req.body.email
    let contrasena = req.body.contrasena
    const datos = {'email': email, 'contrasena': contrasena}
    db.collection('usuarios').find(datos)
    .then( data => {
        res.status(200).json({
            data,
            msg: 'Login exitoso'
        })
    }).catch(err => {
        res.status(500).json({
            data,
            msg: 'No se puede Iniciar Sesión'
        })
    })
    //email obtenemos los datos del usuario
    let usuario = {
        nombre: "Rodrigo",
        passw: "$2b$10$8ivfFX8nxwvZY3Bx9F.TsOl7iH4ba4kkNRmsQmfZZasHFFrBWjyRi",
        createAt: "2020-07-05T17:22:47.498Z",
        sessionID: "nhYDrioSKYCuCXFGG56ZZJ95-mIUd35D",
        _id: "5f020c672866d8153a7c85ee"
    }

    let token = jwt.sign({data: usuario}, process.env.KEY_JWT, {
        algorithm: 'HS256',
        expiresIn: 60
    })
    console.log(token)
    res.status(200).json({
        passw: usuario.passw,
        token 
    })
}
module.exports = {
    prueba,
    getUsuarios,
    nuevoUsuario,
    loginUsuario


}