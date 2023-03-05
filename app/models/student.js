const mongoose = require('mongoose')

const { Schema } = mongoose

const studentSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    code : {
        type : String,
        required  :true
    }
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student