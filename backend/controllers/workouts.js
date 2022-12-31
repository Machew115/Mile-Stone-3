const workoutRouter = require('express').Router()
const db = require('../models')

const{Workouts} = db

workoutRouter.get('/',async(req,res)=>{
    const workouts = await Workouts.FindAll()
    res.json(workouts)
})


module.exports = workoutRouter