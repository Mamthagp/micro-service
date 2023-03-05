const { default: axios } = require('axios')
const Student = require('../models/student')

const studentsCltr = {}

studentsCltr.list = (req, res) => {
    Student.find()
        .then((students) => {
            res.json(students)
        })
        .catch((err) => {
            res.json(err)
        })
}

studentsCltr.create = (req, res) => {
    const body = req.body
    const student = new Student(body)
    student.save()
        .then((student) => {
            res.json(student)
        })
        .catch((err) => {
            res.json(err)
        })
}

studentsCltr.detail = (req, res) => {
    const code = req.body.code
    Student.findOne({code : code})
       .then((student) => {
            const id = student._id
            axios.get(`http://localhost:3002/api/details/${id}`)
                .then((response) => {
                    // const details = response.data
                    // res.json({
                    //     student,
                    //     details
                    // })
                    // ---- OR ------- like below
                    response.data.name = student.name
                    res.json(response.data)
                })
                .catch((err) => {
                    res.json(err)
                })
       })
       .catch((err) => {
            res.json(err)
       })
}

module.exports = studentsCltr