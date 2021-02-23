const express = require('express')
const router = express.Router()
const logic = require('./logic')
const helpers = require('../../utils/helpers')

//aici arata bine
router.route('/')
    .get((_, res) => helpers.wrapApi(res, logic.getAll()))
    .post((req, res) => helpers.wrapApi(res, logic.create(req.body.todo)))


//aici intelegeti
router.route('/:ID')
    .delete((req, res) => {
        logic.delete(req.params.ID).then(todo => {
            res.json({ todo })
        }).catch(err => {
            res.status(400)
            res.send(err)
        })
    })
    .put((req, res) => {
        logic.update(req.params.ID, req.body.todo).then(todo => {
            res.json({ todo })
        }).catch(err => {
            res.status(400)
            res.send(err)
        })
    })
    .get((req, res) => {
        logic.getById(req.params.ID).then(todo => {
            res.json({ todo })
        }).catch(err => {
            res.status(400)
            res.send(err)
        })
    })

module.exports = router
