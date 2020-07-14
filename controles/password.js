;
'use strict'

const bcrypt = require('bcrypt')

let codificarPassword = (req,res, next) => {
    let usuario = req.body || null
    if (!usuario || usuario.contrasena == '' || !usuario.contrasena) {
        console.log('usuario no valido')
        return res.status(200).send('usuario o contraseña invalidos')
    }else{
        let codificarPassword = bcrypt.hashSync(usuario.contrasena, bcrypt.genSaltSync(10))
        if (codificarPassword) {
            req.body.contrasena = codificarPassword
        }else {
            return res.status(200).send('el password no se pudo procesar')
        }
    }    
}

module.exports = {codificarPassword}