const userRouter = require('express').Router()
const db = require('../models')
const bcrypt =require('bcrypt')

const {Users} = db

userRouter.post('/', async(req,res)=>{
   let userCheck= await Users.findOne({
        where: {user_email:req.body.user_email}
   })
   if(userCheck){
    res.status(404).json({
        message: 'User already exists, please log in'
    })
   } else {
    let {user_password,...rest}=req.body
    const user = await Users.create({
            ...rest,
            user_password: await bcrypt.hash(user_password,12)
        })
        res.json(user)        
   }    
})

userRouter.get('/'), async(req,res)=>{
    const users=await Users.findAll()
    res.json(users)
}

module.exports = userRouter