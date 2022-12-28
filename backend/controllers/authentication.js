//Dependencies
const auth = require ('express').Router()
const db = require('../models')
const {Users} = db
const {Op} =require('sequelize')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


auth.post('/',async (req,res)=>{
    //res.send('Hello we hit the route')
    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ message: `Could not find a user with the provided username and password` })
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.userId })
        res.json({ user: user, token: result.value })
    }
})
 
auth.get('/profile', async (req, res) => {
    res.json(req.currentUser)
})

//export module
module.exports= auth