const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/students-api")
    .then(() => {
        console.log('connection is successful')
    }).catch((e) => {
        console.log(e)
    })