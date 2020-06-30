;
'use strict'
const mongoose = require('mongoose');

(async () => {
    try {
        const schema = new mongoose.Schema({
            name: String,
            email: String,
        }, { collection: 'users'});

        const user = mongoose.model('User', schema)
        await mongoose.connect('mongodb://127.0.0.1:27017', {
            dbName: 'apiMongo',
            useUnifiedTopology:true,
            useNewUrlParser:true,
            //user: '',
            //pass: '',    
        });

        const user1 = new user({
            name: 'Leo',
            email: 'leo@leo.com'
        })

        await user1.save()
    } catch (error) {
        console.log(error)
    }
    
})()

