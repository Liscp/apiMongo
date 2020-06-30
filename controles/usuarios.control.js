; 
'use strict'

const connectDb = require('../config/db'),
      fs = require('fs')
const { ObjectId } = require('mongodb')

let prueba = (req, res) => {
    res.status(200).send('Hola API')
}

let getAll = async(req, res) => {
    let db = await connectDb();
    db.collection('usuarios').find().toArray()
    .then(data => {
        res.status(200).json({
            transaccion: true,
            data,
            msg: `Datos obtenidos ${data.length}`
        })
    })
    .catch(err => {
        res.status(500).json({
            transaccion: false,
            data: null,
            msg: err
        })
    })
} 

let getById = async (req, res) => {
    let db = await connectDb()
        id = new ObjectId(req.query.id)
    db.collection('usuarios').find({'_id': id}).toArray()

    .then(data => {
        res.status(200).json({
            transaccion: true,
            data,
            msg: `Datos obtenidos ${data.length}`
        })
    })
    .catch(err => {
        res.status(500).json({
            transaccion: false,
            data: null,
            msg: err
        })
    })
}

let getUsuarios = async(req, res) => {
    let db = await connectDb()
    db.collection('usuarios').find().toArray()
    .then(data => {
        res.status(200).json({
            transaccion: true,
            data: data,
            msg: "listo"
        })
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: null,
            msg: err
        })
    })
}

let updateDateMany = async(req, res) => {
    let db = await connectDb()
    let data = req.body
    db.collection('usuarios').updateMany({'sexo': data.sexo}, {$set: {'edad': data.edad, 'direccion': 'Quito'}})
    .then(data => {
        res.status(200).json({
            transaccion: true,
            data: data,
            msg: "datos actualizados"
        })
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: null,
            msg: `El error es ${err}`
        })
    })
}

let posmanQuery = (req, res) => {
    let nombre = req.query.nombre
    let apellido = req.query.apellido
    let edad = req.query.edad
    let persona = req.query

    console.log(req.query)
    console.log(persona)

    let data = {
        nombre,
        apellido,
        edad
    }
    res.status(200).json({
        transaccion: true,
        data,
        msg: ''
    })
}

let posmanParams = (req, res) => {
    let nombre = req.params.nombre
    let apellido = req.params.apellido
    let edad = req.params.edad
    let persona = req.params

    console.log(persona)

    let data = {
        nombre,
        apellido,
        edad
    }
    res.status(200).json({
        transaccion: true,
        data,
        msg: ''
    })
}

let posmanBody = (req, res) => {
    /*console.log(req.body)
    let nombre = req.body.data.nombre
    let apellido = req.body.data.apellido
    let edad = req.body.data.edad
    let persona = req.body

    console.log(persona)*/

    let data = req.body.data
    console.log(data)

    data.nombre = data.nombre + 'casa'

    /*let data = {
        nombre,
        apellido,
        edad
    }*/

    res.status(200).json({
        transaccion: true,
        data,
        msg: ''
    })
}


module.exports = {
    prueba,
    getUsuarios,
    posmanQuery,
    posmanParams,
    posmanBody


}