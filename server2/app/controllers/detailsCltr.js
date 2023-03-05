const Detail = require('../models/detail')

const detailsCltr = {}

detailsCltr.list = (req, res) => {
    Detail.find()
        .then((usersDetail) => {
            res.json(usersDetail)
        })
        .catch((err) => {
            res.json(err)
        })
}

detailsCltr.create = (req, res) => {
    const body = req.body
    const detail = new Detail(body)
    detail.save()
        .then((student) => {
            res.json(student)
        })
        .catch((err) => {
            res.json(err)
        })
}

detailsCltr.show = (req, res) => {
    const { id } = req.params
    Detail.findOne({userId : id})
        .then((userDetail) => {
            res.json(userDetail)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = detailsCltr