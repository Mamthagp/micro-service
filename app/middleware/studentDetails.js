const axios = require('axios')
const Student = require('../models/student')

const studentDetails = function(req, res, next){
    // const {code} = req.body
    // Student.findOne({code : code})
    //    .then((student) => {
    //         res.json(student)
    //         const userId = student._id
    //         axios.get(`http://localhost:3002/api/details/${userId}`)
    //             .then((info) => {
    //                 res.json(info)
    //                 next()
    //             })
    //             .catch((err) => {
    //                 res.json(err)
    //             })
    //    })
    //    .catch((err) => {
    //     res.json(err)
    //    })
}

module.exports = studentDetails