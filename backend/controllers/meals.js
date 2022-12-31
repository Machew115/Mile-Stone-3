const mealsRouter = require('express').Router()
const db = require('../models')

const{Meals} = db

mealsRouter.get('/',async(req,res)=>{
    const meals = await Meals.FindAll()
    res.json(meals)
})


module.exports = mealsRouter