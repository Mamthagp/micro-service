const express = require('express')
const router = express.Router()
const detailsCltr = require('../app/controllers/detailsCltr')

router.get('/api/details/', detailsCltr.list)
router.post('/api/details', detailsCltr.create)
router.get('/api/details/:id', detailsCltr.show)

module.exports = router