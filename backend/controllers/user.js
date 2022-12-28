const Router = require ('express').Router()
const db = require('../models')
const {Users} = db
const {Op} =require('sequelize')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { User } = db

Router.post('/', async (req, res) => {
    let { password, ...rest } = req.body;
    const user = await User.create({
        ...rest, 
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(user)
})

Router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = Router
