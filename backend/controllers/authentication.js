const express = require('express')
const router = express.Router();
const db = require('../models/users');

router.get('/', (req, res) => {
    db.Users.find()
    .then(foundUsers => {
        res.json(foundUsers)
    })

    .catch(err => {
        console.log('err', err)
        res.send('funny error')
    })
})
router.post('/test', (req, res) => {
    db.Users.create(req.body)
    .then(() => {
        res.send("pass")
    })
    .catch(err => {
        console.log('err', err)
        res.send('funny error')
    })
})

module.exports = router