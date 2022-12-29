const userRouter = require('express').Router()
const db = require('../models')
const bcrypt =require('bcrypt')


const {User} = db

userRouter.post('/', async(req,res)=>{
    console.log(req.body)
    let {password,...rest}=req.body
    const user = await User.create({
        ...rest,
        user_password: await bcrypt.hash(password,12)
    })
    res.json(user)
})

userRouter.get('/'), async(req,res)=>{
    const users=await User.findAll()
    res.json(users)
}

module.exports = userRouter