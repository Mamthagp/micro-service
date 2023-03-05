const express = require('express')
const cors = require('cors')
const configDB = require('./config/database')
const routes = require('./config/routes')
const app = express()
const PORT = 3002

configDB()
app.use(express.json())
app.use(cors())
app.use('/', routes)

app.listen(PORT, () => {
    console.log('server running on', PORT)
})