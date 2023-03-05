const mongoose = require('mongoose')

const configDB = () => {
    mongoose.connect('mongodb://localhost:27017/Student-MS1')
        .then(() => {
            console.log('connected to db')
        })
        .catch(() => {
            console.log('error connected to db')
        })
}

module.exports = configDB