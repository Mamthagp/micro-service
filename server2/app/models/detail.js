const mongoose = require('mongoose')
const Student = require('../../../server1/app/models/student')

const { Schema } = mongoose

const detailSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'Student',
        required : true
    },
    age : {
        type : Number,
        required  :true
    },
    city : {
        type : String,
        required : true
    }
})

const Detail = mongoose.model('Detail', detailSchema)

module.exports = Detail