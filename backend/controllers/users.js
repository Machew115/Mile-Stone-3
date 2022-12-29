const userRouter = require('express').Router()
const db = require('../models')
const bcrypt =require('bcrypt')


const {Users} = db


userRouter.post('/', async(req,res)=>{
    console.log(req.body)
    let {user_password,...rest}=req.body
    const user = await Users.create({
        ...rest,
        user_password: await bcrypt.hash(user_password,12)
    })
    res.json(user)
})

userRouter.get('/'), async(req,res)=>{
    const users=await Users.findAll()
    res.json(users)
}

module.exports = userRouter