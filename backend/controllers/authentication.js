//Dependencies
const auth = require ('express').Router()
const db = require('../models')
const {Users} = db
const {Op} =require('sequelize')

auth.get('/',async (req,res)=>{
    //res.send('Hello we hit the route')
    try {
        const foundUsers = await Users.findAll()
        
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})
    
//export module
module.exports= auth