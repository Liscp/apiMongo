;
'use strict'

const jwt = require('jsonwebtoken')

let autentica = (req,res, next) => {
    let token = req.headers.authorization || null
    console.log(token)
    jwt.verify(token, process.env.KEY_JWT, (err, decode) => {
        if (err) {
            return res.status(400).json({
                data: err,
                msg: 'Token invalido'
            })
        }else {
            req.decode = decode
            let token = jwt.sign({data: decode.data}, process.env.KEY_JWT, {
                algorithm: 'HS256',
                expiresIn: 60
            }) 
            req.token = token
            next()
        }
    })
}

module.exports = {
    autentica
}