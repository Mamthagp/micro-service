const express = require('express')
const router = express.Router()
const studentsCltr = require('../app/controllers/studentsCltr')
const studentDetails = require('../app/middleware/studentDetails')

router.get('/api/students', studentsCltr.list)
router.post('/api/students', studentsCltr.create)
router.post('/api/users/details', studentsCltr.detail)

module.exports = router